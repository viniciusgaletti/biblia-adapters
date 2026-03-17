-- Create the learnings table
CREATE TABLE public.learnings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    number INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    date DATE NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('IA', 'Vibecoding', 'Automacoes', 'Agentes de IA')),
    level TEXT NOT NULL CHECK (level IN ('Iniciante', 'Intermediario', 'Avancado')),
    context TEXT NOT NULL,
    learning TEXT NOT NULL,
    steps TEXT,
    observations TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.learnings ENABLE ROW LEVEL SECURITY;

-- Create RLS Policy for public read access (anon role)
CREATE POLICY "Allow public read" 
    ON public.learnings 
    FOR SELECT 
    TO anon 
    USING (true);

-- Create RLS Policy for public insert access (anon role)
CREATE POLICY "Allow public insert" 
    ON public.learnings 
    FOR INSERT 
    TO anon 
    WITH CHECK (true);

-- Insert initial seed data
INSERT INTO public.learnings (
    title, 
    author, 
    date, 
    category, 
    level, 
    context, 
    learning, 
    steps, 
    observations
) VALUES (
    'Conectando ERPs sem API via SQL Server',
    'Kimberly Prestes',
    '2025-03-17',
    'Vibecoding',
    'Avancado',
    'Clientes com ERPs sem API travam qualquer automacao direta.',
    'Solicitar acesso de leitura ao banco SQL Server do ERP via suporte libera conexao com qualquer sistema externo sem depender de API oficial.',
    '1. Solicitar credenciais ao suporte com permissao somente SELECT. 2. Salvar nos Secrets do Supabase. 3. Criar Edge Function com schedule para sincronizar dados via UPSERT.',
    'Custo real de R$400 para liberacao. Ja inclua no escopo do projeto.'
);
