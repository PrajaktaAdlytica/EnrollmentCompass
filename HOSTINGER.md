# Hostinger deployment — no Node.js/Web App slot

This is a static React concept preview. PHP/HTML hosting can serve the compiled HTML, CSS, JS, images and video. No PHP conversion, database, Node process or server start command is needed. A domain purchase alone is not hosting: an active web/cloud hosting plan with an available ordinary website allowance is required.

## Git branches
- `main`: editable source, assets, screenshots and project documentation.
- `hostinger`: compiled website with index.html at its root; connect THIS branch to Hostinger.
- GitHub Actions builds pushes to main and updates hostinger. Hostinger's generic Git deployment does not run npm/build commands.

## Connect
1. In hPanel > Websites, add a Custom PHP/HTML (blank) website to your existing hosting plan and assign the domain you purchased. If the domain already has a website, use its dashboard; back up existing files before replacing them.
2. Website dashboard > Advanced > Git > Connect with GitHub.
3. Authorize Hostinger for PrajaktaAdlytica/EnrollmentCompass, select that repository.
4. Branch: hostinger. Deployment/root directory: public_html. Deploy.
5. Check that public_html contains index.html, .htaccess, assets/ and video/ directly. Do not place the whole source project or a nested dist/client folder here.
6. Follow hPanel's domain connection instructions if it reports the domain is not connected. Use the DNS values shown for this hosting account; preserve email MX/TXT records. A domain purchased at Hostinger may already be connected after assignment.
7. Check SSL is active, enable HTTPS in hPanel, then test the homepage and refresh /products/benefits-proof, /request-demo and /demo/workbench. The included .htaccess handles these React routes.

## Manual upload fallback
Upload enrollmentcompass-hostinger.zip through the website File Manager and extract its CONTENTS into public_html. Include the hidden .htaccess file. Back up or move a conflicting default index.php/default.php first. Do not upload node_modules, src or the Git .git directory.

## Updates
Push source changes to main. Check the GitHub Actions workflow "Build Hostinger static branch" succeeds. Hostinger auto-deploys pushes to the connected hostinger branch when enabled; otherwise select Redeploy in hPanel. Never edit generated hostinger files directly.

## Scope
Inquiry and sign-in screens are demonstrations; no email, real account creation, live enrollment, reminders or uploads are connected. Hosting does not make those features live. Site remains clearly marked concept preview with synthetic data.

## Verified Hostinger references
- https://docs.hostinger.com/websites/git
- https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/
