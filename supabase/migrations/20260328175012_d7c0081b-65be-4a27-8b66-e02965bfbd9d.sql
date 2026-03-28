-- Drop the overly permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can insert feedback" ON public.chat_feedback;

-- Create a tighter INSERT policy that validates field lengths and feedback_type values
CREATE POLICY "Allow validated feedback insertion" 
ON public.chat_feedback
FOR INSERT 
TO anon, authenticated
WITH CHECK (
  char_length(feedback_type) <= 20
  AND char_length(message_content) <= 5000
  AND char_length(assistant_response) <= 10000
  AND (category IS NULL OR char_length(category) <= 100)
  AND (details IS NULL OR char_length(details) <= 2000)
  AND feedback_type IN ('positive', 'negative')
);

-- Explicitly deny SELECT for anon and authenticated (edge function uses service role which bypasses RLS)
CREATE POLICY "No public read access to feedback"
ON public.chat_feedback
FOR SELECT
TO anon, authenticated
USING (false);