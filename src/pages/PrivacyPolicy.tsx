import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header audience="learn" />

      <main className="flex-1 py-12">
        <div className="container px-4 max-w-3xl mx-auto prose prose-sm dark:prose-invert">
          <h1>Privacy Policy</h1>

          <p>
            Little Minds is committed to protecting your privacy. This Privacy Policy explains what
            information we collect (and don't collect), how we use it, and your rights. We've kept
            it simple because we genuinely collect very little.
          </p>

          <h2>Information We Do Not Collect</h2>
          <p>
            Little Minds does not collect personal information from anyone of any age through
            general use of this website. No user accounts, sign-ups, or logins are required. The
            only personal information we receive is what you <strong>voluntarily choose to
            submit</strong> through our contact form or donation inquiry form.
          </p>
          <p>Little Minds does <strong>not</strong>:</p>
          <ul>
            <li>Require user accounts, sign-ups, or logins</li>
            <li>Automatically collect personal information from any visitor</li>
            <li>Use analytics tracking, advertising cookies, or third-party trackers</li>
            <li>Sell, share, or trade any user data with third parties</li>
          </ul>

          <h2>Information Stored Locally on Your Device</h2>
          <p>
            Some features use your browser's <strong>local storage</strong> to save preferences and
            progress directly on your device. This data never leaves your device and is not sent to
            any server. It includes:
          </p>
          <ul>
            <li><strong>Audience preference</strong> — whether you chose the parent, kid, or learn section</li>
            <li><strong>Activity progress</strong> — which activities or challenges you've completed</li>
            <li><strong>Learning progress</strong> — which topics you've read</li>
            <li><strong>Favorites</strong> — any content you've marked as a favorite</li>
            <li><strong>Accessibility settings</strong> — such as high contrast or reduced motion preferences</li>
            <li><strong>Country preference</strong> — your selected country for crisis helpline resources</li>
            <li><strong>Private Journal</strong> — journal entries in the kids section are stored locally only and are completely private</li>
          </ul>
          <p>
            You can clear this data at any time by using the <strong>"Clear My Data"</strong> button
            in the Accessibility Settings panel (the gear icon), or by clearing your browser's local
            storage or site data manually. No one — including us — can access this information.
          </p>

          <h2>Contact and Donation Forms</h2>
          <p>
            If you voluntarily submit a message through our contact form or a donation inquiry
            through our donate page, the information you provide (such as your name, email address,
            and message) is sent via a secure backend function for the sole purpose of responding to
            your inquiry. We do not store this information in a database or use it for any other
            purpose.
          </p>
          <p>
            The donation inquiry form requires users to confirm that they are 18 years of age or
            older. The contact form requires users to confirm they are 13 or older before
            submitting. These safeguards help ensure compliance with children's privacy regulations
            while keeping communication accessible.
          </p>

          <h2>AI Chat Assistant ("Little Minds Helper")</h2>
          <p>
            The Little Minds Helper chat feature is powered by automated AI technology. Before your
            first message, a notice is displayed reminding you that the assistant is an AI (not a
            real person or doctor), that chats are not saved, and that you should not share personal
            secrets. When you use the chat:
          </p>
          <ul>
            <li>Your messages are sent to a backend function that processes the request and returns a response</li>
            <li><strong>Conversations are not stored</strong> — when you close the chat or refresh the page, the conversation is gone</li>
            <li>We do not log, save, or review individual chat messages</li>
            <li>Please do not share sensitive personal information through the chat</li>
          </ul>

          <h3>Automated Safety Filters</h3>
          <p>
            To keep the chat safe — especially for children — your messages are scanned by automated
            filters <em>before</em> being sent to the AI. These filters run in real time, are not
            stored, and are not reviewed by any person. They include:
          </p>
          <ul>
            <li><strong>Personal information detection</strong> — if your message appears to contain things like an email address, phone number, home address, or school name, that information is automatically removed before the AI ever sees it, and the AI is reminded to gently encourage you not to share personal details.</li>
            <li><strong>Content safety filter</strong> — messages containing profanity, sexual content, graphic violence, drugs, or weapons are blocked before reaching the AI, and a kind, age-appropriate redirect is shown instead.</li>
            <li><strong>Crisis-language safety response</strong> — if a message contains words suggesting self-harm or suicidal thoughts, the chat will attempt to show crisis hotline information at the top of the reply. This is a best-effort safety feature and may not catch every situation — nothing about the message is stored.</li>
            <li><strong>Prompt-injection protection</strong> — common attempts to override the assistant's safety rules are blocked.</li>
          </ul>
          <p>
            None of these filters store, log, or transmit your messages anywhere outside the
            short-lived processing of the chat request itself.
          </p>

          <h3>Chat Feedback</h3>
          <p>
            If you choose to submit feedback on a chat response (thumbs up/down), a record is saved
            that includes the feedback type and the relevant message content. This feedback is
            anonymous — it is not linked to any user identity — and is used solely to improve the
            quality of the chat assistant.
          </p>

          <h2>Children's Privacy (COPPA Compliance)</h2>
          <p>
            Little Minds is designed to be safe for children. As stated above, this website does not
            automatically collect personal information from any visitor of any age. The only personal
            information we receive is what users voluntarily submit through our contact or donation
            inquiry forms.
          </p>
          <p>
            To comply with the Children's Online Privacy Protection Act (COPPA), which protects
            children under the age of 13, our contact form requires users to confirm that they are
            13 years of age or older before submitting. The donation inquiry form requires users to
            be 18 or older. These age requirements ensure that we do not knowingly collect personal
            information from children under 13.
          </p>
          <p>We further protect children's privacy by:</p>
          <ul>
            <li>Not requiring accounts, registration, or sign-ups</li>
            <li>Storing all child-facing features (journal, progress, favorites) locally on the device only</li>
            <li>Not using tracking, advertising, or data collection tools</li>
          </ul>
          <p>
            Parents and guardians are encouraged to supervise their children's use of the internet,
            including this website. If you are a parent or guardian and have questions about how this
            website handles privacy, please contact us through our{" "}
            <a href="/contact">contact page</a>.
          </p>

          <h2>Hosting and Third-Party Services</h2>
          <p>
            This website uses third-party hosting and backend services to operate (such as serving
            web pages and processing form submissions). These services do not collect personally
            identifiable information (PII) from any users, including children. No analytics,
            advertising, or tracking services are used.
          </p>

          <h2>Cookies</h2>
          <p>
            Little Minds does not use advertising cookies, analytics cookies, or third-party
            tracking cookies. The only browser storage used is local storage for the features
            described above.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This website may contain links to external resources and websites. Little Minds is not
            responsible for the privacy practices of third-party sites. We encourage you to review
            the privacy policies of any external site you visit.
          </p>

          <h2>Data Security</h2>
          <p>
            Because we collect minimal data, our security risk is inherently low. Communication
            between your browser and our backend functions is encrypted via HTTPS. Locally stored
            data is protected by your device and browser's own security.
          </p>

          <h2>Your Rights</h2>
          <p>
            Since we do not collect or store personal data, there is generally no personal
            information for us to delete, correct, or provide. If you submitted a contact form
            inquiry and wish to have it addressed, please reach out through our{" "}
            <a href="/contact">contact page</a>.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be reflected on
            this page with an updated date. Continued use of the website after changes constitutes
            your acceptance of the updated policy.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please reach out through our{" "}
            <a href="/contact">contact page</a>.
          </p>

          <p className="text-xs text-muted-foreground mt-8">
            Last updated: April 2026
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
