-- Add new columns for enhanced learning records
ALTER TABLE public.aprendizados 
ADD COLUMN "number" SERIAL,
ADD COLUMN "author" TEXT NOT NULL DEFAULT 'Admin',
ADD COLUMN "level" TEXT NOT NULL DEFAULT 'Iniciante',
ADD COLUMN "context" TEXT NOT NULL DEFAULT 'Contexto geral',
ADD COLUMN "steps" TEXT,
ADD COLUMN "observations" TEXT;

-- Insert a default user and 6 seed learnings
DO $do$
DECLARE
  new_user_id uuid;
BEGIN
  -- Generate user ID
  new_user_id := gen_random_uuid();
  
  -- Insert seed user (following strict GoTrue auth.users requirements)
  INSERT INTO auth.users (
    id, instance_id, email, encrypted_password, email_confirmed_at,
    created_at, updated_at, raw_app_meta_data, raw_user_meta_data,
    is_super_admin, role, aud,
    confirmation_token, recovery_token, email_change_token_new,
    email_change, email_change_token_current,
    phone, phone_change, phone_change_token, reauthentication_token
  ) VALUES (
    new_user_id,
    '00000000-0000-0000-0000-000000000000',
    'eliter@example.com',
    crypt('SenhaForte123!', gen_salt('bf')),
    NOW(), NOW(), NOW(),
    '{"provider": "email", "providers": ["email"]}',
    '{"name": "Eliter"}',
    false, 'authenticated', 'authenticated',
    '', '', '', '', '', NULL, '', '', ''
  );

  -- Insert 6 seed learnings linked to the newly created user
  INSERT INTO public.aprendizados (user_id, titulo, conteudo, categoria, author, level, context, steps, observations)
  VALUES 
    (new_user_id, 'Introdução ao Vibecoding', 'Vibecoding é a arte de programar usando IA como parceira. Significa ditar o fluxo da aplicação enquanto a inteligência artificial cuida da complexidade do código base.', 'Vibecoding', 'João Silva', 'Iniciante', 'Estudando novos paradigmas de programação', '1. Abrir Cursor\n2. Escrever prompt inicial\n3. Iterar com IA', 'Muito promissor para produtividade'),
    (new_user_id, 'Criando Agentes Autônomos', 'Agentes que planejam e executam tarefas sozinhos usando LangChain e ferramentas customizadas para busca na web e acesso a banco de dados interno.', 'Agentes de IA', 'Maria Souza', 'Avancado', 'Projeto de automação financeira corporativa', '1. Definir tools\n2. Setup LLM\n3. Memory buffer', 'Requer muito cuidado com o consumo de tokens e loops infinitos'),
    (new_user_id, 'Automatizações com n8n', 'Como integrar Supabase, Stripe e Discord usando n8n em um fluxo único sem precisar escrever código de backend complexo.', 'Automacoes', 'Carlos Lima', 'Intermediario', 'Sistema SaaS de assinaturas', '1. Criar webhook\n2. Mapear dados do Stripe\n3. Inserir no Supabase', 'Prestar atenção nos limites de rate-limit das APIs externas'),
    (new_user_id, 'Prompt Engineering Avançado', 'Técnicas de few-shot, chain-of-thought e self-reflection para obter resultados muito mais precisos e estruturados de modelos fundacionais.', 'IA', 'Ana Paula', 'Avancado', 'Melhorando qualidade de respostas do chatbot', NULL, 'O desempenho varia muito dependendo do modelo utilizado (Claude vs GPT-4)'),
    (new_user_id, 'Setup Inicial de IA no Projeto', 'Configurando chaves de API da OpenAI e Anthropic no ambiente local e integrando o SDK oficial de forma segura.', 'IA', 'João Silva', 'Iniciante', 'Onboarding de novos desenvolvedores', '1. Criar conta nas plataformas\n2. Gerar API keys\n3. Adicionar ao .env', NULL),
    (new_user_id, 'Fluxos de Aprovação de IA', 'Como criar um agente supervisor para validar saídas de outros agentes, garantindo que o conteúdo gerado atenda às políticas da empresa.', 'Agentes de IA', 'Maria Souza', 'Intermediario', 'Projeto corporativo de moderação', '1. Agente criador gera texto\n2. Agente revisor avalia\n3. Retorna feedback', 'Reduz as alucinações e respostas indesejadas significativamente');
END $do$;
