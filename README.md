# Frontend Mentor - GitHub Jobs API

![Design preview for the GitHub Jobs API coding challenge](./preview.jpg)

## Welcome! 👋

Thanks for purchasing this premium Frontend Mentor coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges allow you to improve your skills in a real-life workflow. These premium challenges are perfect portfolio pieces, so please do feel free to use what you build in your portfolio to show others.

**To do this challenge, you need a solid understanding of HTML, CSS, and JavaScript.**

## The challenge

Your challenge is to build out this jobs board using the [GitHub Jobs API](https://jobs.github.com/api) data and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

-   View the optimal layout for each page depending on their device's screen size
-   See hover states for all interactive elements throughout the site
-   View all jobs currently live on the GitHub Jobs API
-   Be able to click a job from the index page so that they can read more information and apply for the job
-   **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

⚠️ **IMPORTANT** ⚠️: The GitHub Jobs API will throw a CORS error when you try to pull data from it in your project. To avoid this, you need to use [CORS Anywhere](https://cors-anywhere.herokuapp.com/). This allows you to prefix your request URL with `https://cors-anywhere.herokuapp.com/` and the request will come back as expected. So, if you wanted to request all positions, your request would look something like this:

```javascript
fetch(
    'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
)
    .then((res) => res.json())
    .then((data) => console.log(data));
```

⚠️ **IMPORTANT** ⚠️: The "Full Time Only" param seems to have changed on the GitHub Jobs API. Instead of setting `full_time=true`, it seems like `full_time=on` is what you should set. Although the docs still say `full_time=true`.

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the Sketch design file provided. You can download the design file on the platform. It comes with a `README.md` file as well to help you get set up on Sketch or other popular design tools like Figma and Adobe XD.

All the required assets for this project are in the `/assets` folder. The assets are already exported for the correct screen size and optimized. Some images can be re-used at multiple screen sizes. So if you don't see an image in a specific folder, it will typically be in another folder for that page.

The design system in the Sketch file will give you more information about the various colors, fonts, and styles used in this project.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Separate the `starter-code` from the rest of this project and rename it to something meaningful for you. Initialize the codebase as a public repository on [GitHub](https://github.com/). This will make it easier to share your code with the community if you need some help. If you're not sure how to do this, [have a read through of this Try Git resource](https://try.github.io/). **IMPORTANT: There are already a couple of `.gitignore` files in this project. Please do not remove them or change the content of the files. This is to avoid the accidental upload of the Sketch file to GitHub. With these premium challenges, please be sure not to share the Sketch file in your GitHub repo. Thanks!**
2. Configure your repository to publish your code to a URL. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, but we recommend using [Vercel](https://bit.ly/fem-vercel). We've got more information about deploying your project with Vercel below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes that you could create to make reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are a number of ways to host your project for free. We recommend using [Vercel](https://bit.ly/fem-vercel) as it's an amazing service and extremely simple to get set up with. If you'd like to use Vercel, here are some steps to follow to get started:

1. [Sign up to Vercel](https://bit.ly/fem-vercel-signup) and go through the onboarding flow, ensuring your GitHub account is connected by using their [Vercel for GitHub](https://vercel.com/docs/v2/git-integrations/vercel-for-github) integration.
2. Connect your project to Vercel from the ["Import project" page](https://vercel.com/import), using the "From Git Repository" button and selecting the project you want to deploy.
3. Once connected, every time you `git push`, Vercel will create a new [deployment](https://vercel.com/docs/v2/platform/deployments) and the deployment URL will be shown on your [Dashboard](https://vercel.com/dashboard). You will also receive an email for each deployment with the URL.

## Sharing your solution

There are multiple places you can share your solution:

1. Submit it on the platform so that other users will see your solution on the site. Here's our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) to help you do that. **With these premium challenges please be sure not to upload the Sketch file to GitHub when you're submitting to the platform and sharing it around.**
2. Share your solution page in the **#finished-projects** channel of the [Slack community](https://www.frontendmentor.io/slack).
3. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor** including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.

## Giving feedback

Feedback is always welcome, so if you have any to give on this challenge please email hi[at]frontendmentor[dot]io.

**Have fun building!** 🚀
