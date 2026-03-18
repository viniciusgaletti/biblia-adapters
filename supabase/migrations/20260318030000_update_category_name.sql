-- Update learnings table constraint
ALTER TABLE public.learnings DROP CONSTRAINT IF EXISTS learnings_category_check;
UPDATE public.learnings SET category = 'Automações' WHERE category = 'Automacoes';
ALTER TABLE public.learnings ADD CONSTRAINT learnings_category_check CHECK (category IN ('IA', 'Vibecoding', 'Automações', 'Agentes de IA'));

-- Update aprendizados table just in case there are records
ALTER TABLE public.aprendizados DROP CONSTRAINT IF EXISTS aprendizados_categoria_check;
UPDATE public.aprendizados SET categoria = 'Automações' WHERE categoria = 'Automacoes';
