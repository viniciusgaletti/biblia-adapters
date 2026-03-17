-- Create Admin update policy for authenticated users
CREATE POLICY "Admin update" 
    ON public.learnings 
    FOR UPDATE 
    TO authenticated 
    USING (auth.uid() IS NOT NULL)
    WITH CHECK (auth.uid() IS NOT NULL);

-- Create Admin delete policy for authenticated users
CREATE POLICY "Admin delete" 
    ON public.learnings 
    FOR DELETE 
    TO authenticated 
    USING (auth.uid() IS NOT NULL);
