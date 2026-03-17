-- 1. Schema Update (Table: learnings)
ALTER TABLE public.learnings
ADD COLUMN rating_avg NUMERIC(3,2) NOT NULL DEFAULT 0.00,
ADD COLUMN rating_count INTEGER NOT NULL DEFAULT 0;

-- 2. New Table Construction (Table: learning_ratings)
CREATE TABLE public.learning_ratings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    learning_id UUID NOT NULL REFERENCES public.learnings(id) ON DELETE CASCADE,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Row Level Security (RLS) for learning_ratings
ALTER TABLE public.learning_ratings ENABLE ROW LEVEL SECURITY;

-- Public read ratings
CREATE POLICY "Public read ratings"
    ON public.learning_ratings
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- Public insert ratings
CREATE POLICY "Public insert ratings"
    ON public.learning_ratings
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Public delete ratings
CREATE POLICY "Public delete ratings"
    ON public.learning_ratings
    FOR DELETE
    TO anon, authenticated
    USING (true);

-- 4. Trigger Function: update_learning_rating_stats
CREATE OR REPLACE FUNCTION public.update_learning_rating_stats()
RETURNS TRIGGER AS $$
DECLARE
    v_learning_id UUID;
    v_avg NUMERIC(3,2);
    v_count INTEGER;
BEGIN
    IF TG_OP = 'INSERT' THEN
        v_learning_id := NEW.learning_id;
    ELSIF TG_OP = 'DELETE' THEN
        v_learning_id := OLD.learning_id;
    END IF;

    SELECT
        COALESCE(ROUND(AVG(rating)::numeric, 2), 0.00),
        COUNT(*)
    INTO
        v_avg,
        v_count
    FROM public.learning_ratings
    WHERE learning_id = v_learning_id;

    UPDATE public.learnings
    SET
        rating_avg = v_avg,
        rating_count = v_count
    WHERE id = v_learning_id;

    RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Trigger Implementation: after_rating_change
CREATE TRIGGER after_rating_change
AFTER INSERT OR DELETE ON public.learning_ratings
FOR EACH ROW
EXECUTE FUNCTION public.update_learning_rating_stats();
