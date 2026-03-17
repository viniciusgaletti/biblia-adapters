-- Make user_id nullable so anonymous users can create learnings
ALTER TABLE public.aprendizados ALTER COLUMN user_id DROP NOT NULL;

-- Drop existing restrictive RLS policies
DROP POLICY IF EXISTS "Users can see their own learnings" ON public.aprendizados;
DROP POLICY IF EXISTS "Users can insert their own learnings" ON public.aprendizados;
DROP POLICY IF EXISTS "Users can update their own learnings" ON public.aprendizados;
DROP POLICY IF EXISTS "Users can delete their own learnings" ON public.aprendizados;

-- Create new public policies
CREATE POLICY "Public can see learnings" 
    ON public.aprendizados FOR SELECT 
    USING (true);

CREATE POLICY "Public can insert learnings" 
    ON public.aprendizados FOR INSERT 
    WITH CHECK (true);

CREATE POLICY "Public can update learnings" 
    ON public.aprendizados FOR UPDATE 
    USING (true) 
    WITH CHECK (true);

CREATE POLICY "Public can delete learnings" 
    ON public.aprendizados FOR DELETE 
    USING (true);
