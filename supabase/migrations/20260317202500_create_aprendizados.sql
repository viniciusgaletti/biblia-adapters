-- Create the aprendizados table
CREATE TABLE public.aprendizados (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    titulo TEXT NOT NULL,
    conteudo TEXT NOT NULL,
    categoria TEXT
);

-- Enable RLS
ALTER TABLE public.aprendizados ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can see their own learnings" 
    ON public.aprendizados FOR SELECT 
    TO authenticated 
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own learnings" 
    ON public.aprendizados FOR INSERT 
    TO authenticated 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own learnings" 
    ON public.aprendizados FOR UPDATE 
    TO authenticated 
    USING (auth.uid() = user_id) 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own learnings" 
    ON public.aprendizados FOR DELETE 
    TO authenticated 
    USING (auth.uid() = user_id);
