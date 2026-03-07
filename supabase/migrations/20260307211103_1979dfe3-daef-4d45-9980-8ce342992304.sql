CREATE TABLE public.chat_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  message_content TEXT NOT NULL,
  assistant_response TEXT NOT NULL,
  feedback_type TEXT NOT NULL CHECK (feedback_type IN ('positive', 'negative')),
  category TEXT,
  details TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.chat_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert feedback"
ON public.chat_feedback
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Service role can read feedback"
ON public.chat_feedback
FOR SELECT
TO anon, authenticated
USING (true);