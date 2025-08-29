# screamqueens.org

This project is configured for deployment to GitHub Pages with a custom domain.

## Deployment Instructions

### 1. Initialize a Git repository and push it to GitHub

If you haven't already, create a new repository on GitHub named `screamqueens.org`.

In your local project directory, run the following commands:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/screamqueens-cc/screamqueens.org.git
git push -u origin main
```

### 2. Deploy the site

Once your repository is set up, run the following command to build and deploy your site:

```bash
npm run deploy
```

### 3. Configure your custom domain's DNS

Go to your domain registrar's website (e.g., GoDaddy, Namecheap) and add the following DNS records:

- An `A` record that points to `185.199.108.153`
- An `A` record that points to `185.199.109.153`
- An `A` record that points to `185.199.110.153`
- An `A` record that points to `185.199.111.153`
- A `CNAME` record for `www` that points to `screamqueens-cc.github.io`.

After completing these steps, your site will be deployed to GitHub Pages and accessible at `https://screamqueens.org`.
