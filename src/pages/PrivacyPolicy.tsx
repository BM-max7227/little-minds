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
          <p>Little Minds does <strong>not</strong>:</p>
          <ul>
            <li>Require user accounts, sign-ups, or logins</li>
            <li>Collect personal information from anyone of any age through general use of the site</li>
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
            <li><strong>Activity progress</strong> — which activities or challenges you've completed</li>
            <li><strong>Learning progress</strong> — which topics you've read</li>
            <li><strong>Favorites</strong> — any content you've marked as a favorite</li>
            <li><strong>Private Journal</strong> — journal entries in the kids section are stored locally only and are completely private</li>
          </ul>
          <p>
            You can clear this data at any time by clearing your browser's local storage or site
            data. No one — including us — can access this information.
          </p>

          <h2>Contact Form</h2>
          <p>
            If you voluntarily submit a message through our contact form, the information you provide
            (such as your name and email address) is sent via a secure backend function for the sole
            purpose of responding to your inquiry. We do not store this information in a database or
            use it for any other purpose.
          </p>

          <h2>AI Chat Assistant ("Little Minds Helper")</h2>
          <p>
            The Little Minds Helper chat feature is powered by automated AI technology. When you use
            the chat:
          </p>
          <ul>
            <li>Your messages are sent to a backend function that processes the request and returns a response</li>
            <li><strong>Conversations are not stored</strong> — when you close the chat or refresh the page, the conversation is gone</li>
            <li>We do not log, save, or review individual chat messages</li>
            <li>Please do not share sensitive personal information through the chat</li>
          </ul>

          <h3>Chat Feedback</h3>
          <p>
            If you choose to submit feedback on a chat response (thumbs up/down), a record is saved
            that includes the feedback type and the relevant message content. This feedback is
            anonymous — it is not linked to any user identity — and is used solely to improve the
            quality of the chat assistant.
          </p>

          <h2>Children's Privacy (COPPA Compliance)</h2>
          <p>
            Little Minds is designed to be safe for children. We comply with the Children's Online
            Privacy Protection Act (COPPA) by:
          </p>
          <ul>
            <li>Not collecting personal information from children under 13 (or any age)</li>
            <li>Not requiring accounts, registration, or sign-ups</li>
            <li>Storing all child-facing features (journal, progress, favorites) locally on the device only</li>
            <li>Not using tracking, advertising, or data collection tools</li>
          </ul>
          <p>
            Parents and guardians are encouraged to supervise their children's use of the internet,
            including this website.
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
            Last updated: March 2026
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
