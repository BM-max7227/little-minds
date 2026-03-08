
-- Drop the dangerous "Service role can read feedback" policy (service role bypasses RLS anyway)
DROP POLICY IF EXISTS "Service role can read feedback" ON public.chat_feedback;

-- Drop the current INSERT policy to recreate it properly
DROP POLICY IF EXISTS "Anyone can insert feedback" ON public.chat_feedback;

-- Allow anonymous and authenticated users to INSERT only (permissive)
CREATE POLICY "Anyone can insert feedback"
ON public.chat_feedback
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No SELECT policy = nobody can read via the API. Service role bypasses RLS automatically.
