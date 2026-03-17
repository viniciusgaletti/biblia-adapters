-- Add RLS policies for authenticated users on learnings table to allow them to read and insert records

-- Create RLS Policy for authenticated read access
CREATE POLICY "Allow authenticated read" 
    ON public.learnings 
    FOR SELECT 
    TO authenticated 
    USING (true);

-- Create RLS Policy for authenticated insert access
CREATE POLICY "Allow authenticated insert" 
    ON public.learnings 
    FOR INSERT 
    TO authenticated 
    WITH CHECK (true);

-- Create RLS Policy for authenticated update access
CREATE POLICY "Allow authenticated update" 
    ON public.learnings 
    FOR UPDATE 
    TO authenticated 
    USING (true)
    WITH CHECK (true);

-- Create RLS Policy for authenticated delete access
CREATE POLICY "Allow authenticated delete" 
    ON public.learnings 
    FOR DELETE 
    TO authenticated 
    USING (true);
