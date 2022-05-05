## Getting Started

First, run the development server:

The following commands are what can be used get a local version of the site up and running. This may take some time as I am implementing caching for all Pokemon for the /pokemon page.

If you would like to view a preview I have pre-built this Can be found [right here](https://poke-api-lowazack.vercel.app)

```bash
yarn i
yarn build
yarn start
```
A .env file with the following value can also be created which limits the amount of pokemon viewable on the /pokemon page. 

```ENV
DEVELOPMENT=TRUE
```

### User Stories
1. A /pokemon page was implemented that allows to view all pokemon from The API
2. A generation and type dropdown was added to allow for filtering of the pokemon.
3. An individual pokemon page was created that shows some of the relevant information for that pokemon.
4. A compare page was added to allow sided by side viewing of some key pokemon stats
5. A star icon was added to each individual pokemon that will save that name in user local storage for access later on the /my-pokemon page

### Libraries
1. NextJS: Rather than using base react I decided to go for this as it will come have out of the box server-side rendering on all pages. as well as being able to Cache and preload props into the next js UI reducing load times significantly on data heavy pages and also significantly reducing the time to paint that can come with consuming API's through js framworks.
2. Chakra UI: A react UI component library that is easily customisable and has a wide range of components and   usability hooks to assist with development.

### Issues
1. Search: Initially I was planning on implementing search however seeing as the api does not support partial search i decided It would be best to avoid doing this due to time constraints.
2. An issue I had was dealing with the load times of all 1000+ pokemon  so I implemented a  limit for the dev environment.
3. Time: I did not have enough time to fully write integration tests I have wrote a quick one for testing the local storage functions as a quick example.

### Going Forward
1. Improve the animations on the error pages to aboid the Unown flickering.
2. UI Improvements and general filling out of content as seen by the homepage being empty, also more info can be added to the individual pokemon pages.
3. Add search as this would be a feature to improve usability drastically.
4. Better and more granular filters on the /pokemon page
5. Better stat comparison when comparing pokemon by highlighting which stat is the higher of the two being compared. maybe adding something that will show what moves will be x2/x4 effective.  
