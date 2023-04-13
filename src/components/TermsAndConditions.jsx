import React from "react";

const TermsAndConditions = ({ darkTheme }) => {
  return (
    <div
      id="terms-policy"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Terms &amp; Policy
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <h3 className={"mb-3 mt-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Terms of Use
            </h3>
            <p>
              The Cory Luba website located at https://coryluba.com/ is a copyrighted work belonging to Cory Luba. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features.
            </p>
            <p>
              All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
            </p>
            <p>
              These Terms of Use described the legally binding terms and conditions that oversee your use of the Site. BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the authority and capacity to enter into these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.
            </p>
            <p>
              These terms require the use of arbitration Section 10.2 on an individual basis to resolve disputes and also limit the remedies available to you in the event of a dispute. These Terms of Use were created with the help of the Terms Of Use Generator.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Access to the Site
            </h5>
            <p>
              <b>Subject to these Terms.</b> Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, noncommercial use.
            </p>
            <p>
              <b>Certain Restrictions.</b> The rights approved to you in these Terms are subject to the following restrictions: (a) you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site; (b) you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms.  All copyright and other proprietary notices on the Site must be retained on all copies thereof.
            </p>
            <p>
              Company reserves the right to change, suspend, or cease the Site with or without notice to you.  You approved that Company will not be held liable to you or any third-party for any change, interruption, or termination of the Site or any part.
            </p>
            <p>
              <b>No Support or Maintenance.</b> You agree that Company will have no obligation to provide you with any support in connection with the Site.
            </p>
            <p>
              Excluding any User Content that you may provide, you are aware that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Company or Company's suppliers. Note that these Terms and access to the Site do not give you any rights, title or interest in or to any intellectual property rights, except for the limited access rights expressed in Section 2.1. Company and its suppliers reserve all rights not granted in these Terms.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Third-Party Links & Ads; Other Users
            </h5>
            <p>
              <b>Third-Party</b> Links & Ads. The Site may contain links to third-party websites and services, and/or display advertisements for third-parties.  Such Third-Party Links & Ads are not under the control of Company, and Company is not responsible for any Third-Party Links & Ads.  Company provides access to these Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads.  You use all Third-Party Links & Ads at your own risk, and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links & Ads, the applicable third party's terms and policies apply, including the third party's privacy and data gathering practices.
            </p>
            <p>
              <b>Other Users.</b> Each Site user is solely responsible for any and all of its own User Content.  Because we do not control User Content, you acknowledge and agree that we are not responsible for any User Content, whether provided by you or by others.  You agree that Company will not be responsible for any loss or damage incurred as the result of any such interactions.  If there is a dispute between you and any Site user, we are under no obligation to become involved.
            </p>
            <p>
              You hereby release and forever discharge the Company and our officers, employees, agents, successors, and assigns from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature, that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Site. If you are a California resident, you hereby waive California civil code section 1542 in connection with the foregoing, which states: "a general release does not extend to claims which the creditor does not know or suspect to exist in his or her favor at the time of executing the release, which if known by him or her must have materially affected his or her settlement with the debtor."
            </p>
            <p>
              <b>Cookies and Web Beacons.</b> Like any other website, Cory Luba uses ‘cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Disclaimers
            </h5>
            <p>
              The site is provided on an "as-is" and "as available" basis, and company and our suppliers expressly disclaim any and all warranties and conditions of any kind, whether express, implied, or statutory, including all warranties or conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement.  We and our suppliers make not guarantee that the site will meet your requirements, will be available on an uninterrupted, timely, secure, or error-free basis, or will be accurate, reliable, free of viruses or other harmful code, complete, legal, or safe.  If applicable law requires any warranties with respect to the site, all such warranties are limited in duration to ninety (90) days from the date of first use.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.  Some jurisdictions do not allow limitations on how long an implied warranty lasts, so the above limitation may not apply to you.
            </p>
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              Limitation on Liability
            </h3>
            <p>
              To the maximum extent permitted by law, in no event shall company or our suppliers be liable to you or any third-party for any lost profits, lost data, costs of procurement of substitute products, or any indirect, consequential, exemplary, incidental, special or punitive damages arising from or relating to these terms or your use of, or incapability to use the site even if company has been advised of the possibility of such damages.  Access to and use of the site is at your own discretion and risk, and you will be solely responsible for any damage to your device or computer system, or loss of data resulting therefrom.
            </p>
            <p>
              To the maximum extent permitted by law, notwithstanding anything to the contrary contained herein, our liability to you for any damages arising from or related to this agreement, will at all times be limited to a maximum of fifty U.S. dollars (U.S. $50). The existence of more than one claim will not enlarge this limit.  You agree that our suppliers will have no liability of any kind arising from or relating to this agreement.
            </p>
            <p>
              Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitation or exclusion may not apply to you.
            </p>
            <p>
              <b>Term and Termination.</b> Subject to this Section, these Terms will remain in full force and effect while you use the Site.  We may suspend or terminate your rights to use the Site at any time for any reason at our sole discretion, including for any use of the Site in violation of these Terms.  Upon termination of your rights under these Terms, your Account and right to access and use the Site will terminate immediately.  You understand that any termination of your Account may involve deletion of your User Content associated with your Account from our live databases.  Company will not have any liability whatsoever to you for any termination of your rights under these Terms.  Even after your rights under these Terms are terminated, the following provisions of these Terms will remain in effect: Sections 2 through 2.5, Section 3 and Sections 4 through 10.
            </p>
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              Copyright Policy
            </h3>
            <p>
              Company respects the intellectual property of others and asks that users of our Site do the same.  In connection with our Site, we have adopted and implemented a policy respecting copyright law that provides for the removal of any infringing materials and for the termination of users of our online Site who are repeated infringers of intellectual property rights, including copyrights.  If you believe that one of our users is, through the use of our Site, unlawfully infringing the copyright(s) in a work, and wish to have the allegedly infringing material removed, the following information in the form of a written notification (pursuant to 17 U.S.C. § 512(c)) must be provided to our designated Copyright Agent:
            </p>
            <ul>
              <li>
                your physical or electronic signature;
              </li> 
              <li>
                identification of the copyrighted work(s) that you claim to have been infringed;
              </li>
            </ul>
            <ol className="lh-lg">
              <li>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </li>
              <li>
                Quidam lisque persius interesset his et, Lisque persius
                interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure.
              </li>
              <li>
                In quot quidam persequeris vim, ad mea essent possim iriure.
                Quidam lisque persius interesset his et.
              </li>
              <li>
                Quidam lisque persius interesset his et, Lisque persius
                interesset his et.
              </li>
              <li>
                Interesset his et, Lisque persius interesset his et, in quot
                quidam persequeris vim, ad mea essent possim iriure.
              </li>
              <li>
                Persius interesset his et, Lisque persius interesset his et, in
                quot quidam persequeris vim, ad mea essent possim iriure.
              </li>
              <li>
                Quot quidam persequeris vim Quidam lisque persius interesset his
                et, Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
