First of all, I would like to thank you for the opportunity and say that this was a really fun task to do.

Set up:
	I made some changes to the structure of the project and implemented some changes that can be helpful in the future. I added bootstrap and restructured some of the code. I also strongly suggest to continue writing the css code in scss format. If you have npm installed you just need to navigate to the project folder and type 'npm run scss' and it will automatically recompile your scss into a css file in the css folder. However, you can just make changes to the css file like before and everything will work.

1. Fonts:
  	I added the required fonts. If you need to add any google fonts in the future, there is a really nice google fonts helper site which you can use -> https://google-webfonts-helper.herokuapp.com/fonts
You just need to download the new fonts and them to the fonts folder in the project and copy and paste the provided css files.

2. Site Logos:
	It is always best practice to use svg files instead of png for crisper vision. Given the provided svg files, I just changed the source pointing to the right files. Suggestion: If you insist on using pngs, you can make a sprite with compass for easier management and speed improvement.

3. Icons:
	As the required icons were missing /except the cart one/ I decided to include font awesome. It is a super cool icon library and very easy to use. I added the required icons with this. Suggestion: For custom icons I would use a sprite.

4. Navigation:
	I added some js to toggle the mobile menu.

5. Slideshow:
	I restructured the slides html a bit and implemented a super handy js library called owlcarousel. It is really easy to use and customize. I added the same slide as there was no design for another one, but you can add as many as you want following the same structure and it will work with no changes to the js code. There is a lot of customisation that can be done out of the box but if that is not enough for future designs, anything can be added as custom code on top of it. It can be used for different product carousels as well so I think it is a good choice for this e-commerse website. Currently I left it on autoplay and working on mobile as well. I noticed there was a different photo used for mobile with different dimensions but changes can be made to the code to display different images on mobile/desktop when the image is provided. The owlcarousel library provides drag support as well so it is easy to navigate on mobile.
	I made some changes so the slides match the designs as well.

6. Footer:
	I made some structural changes to the footer, added the required icons and used the bootstrap collapse to make the columns collapsible on mobile. For moving items around /in the footer bottomline aria/ for different devices, you can use a mix of media queries and the property 'order' in css to reorder them. I made the footer fully responsive, fixed the horizontal scrolling caused by the static width of the colourful before element and pulled the bottomline footer out of the main container so it matches the styling.

7. Responsive:
	I added some media query mixins so it's easier to write mobile first responsive code. All you need to do is for each element write your css for mobile, then add @include tablet{ write your code for tablet} and so on /see my code for example/. Bootstrap will help with responsive behaviours as well, it is super easy to learn, just check out the documentation on their website if you haven't used it before.

I added another css file /generated from the scss file/ and rewrote some of the existing css but in the future I would refactor all of it and move the css to one file, but with separate scss files for easier management. Best practice I would recommend is to use css variables and mixins /colours and fonts are one example/. This would make future redesign changes easier. 




----------------------------------------




For the skill assessment, we will be testing out your ability to pick up someone else's code and take it to the next level. 
For the hypothetical situation, a FED has been working on a project but got pulled off so we need your help.

Here's what the FED has to say:

This is where we got to in the cut, but we are having problems and haven't been able to fully test. 
Can you help us resolve the following issues as well as help catch if we missed something?
The client is very particular about having fast page speed, good SEO, and wants interesting interactive pieces.
Support wise they also want to have this page look right in browsers that are over 5% of the browser stats for the US over the past couple of months
Below are the items we haven't been able to get to yet.

//Font:
//  - We set up the Allura and Alex Brush font family stacks in the CSS but we don't have the fonts included

//Site Logos:
//  - We need to account for retina screens

//Icons:
//  - We haven't been able to add the icons to the setup yet
//- Hamburger menu, cart, and search icons haven't been added

Navigation:
//  - We haven't setup functionality for the menu toggle to open up the bottom footer area in small screens

Slideshow:
//  - We need another slide created from the PSD 
//  - The styling isn't right yet for slide content as well
//  - We also haven't been able to set up the slide functionality

Footer:
//  - We got a fair amount of responsive styles done for the site however the footer isn't quite there yet
//  - Social media icons need to be setup so some html changes there to put them in is fine.
  - Expander accordion Javascript functionality hasn't been setup or styled
//  - Footer bottom area: we unfortunately can't pull the html content out of its location
//     - Can we style up the setup so it matches the desktop and mobile styles

Responsive:
//  - For some reason the site isn't switching over to "mobile" styles in devices
//  - Also when you shrink down the browser some sort of content is causing a horizontal scrollbar in smaller screens
//  - In between sizes for tablet portrait feel fairly empty, is there something we can style to make them look better


The client is very active in the project and wants a technical breakdown of what you did and how you resolved the missing items. 
So we need a writing assessment as well as the code above. 
They also want to know how the design UI/UX and FED code practices could be improved down the road, so please include that as well in your writing. 