import Head from 'next/head';

// import ClientPromise from '../libs/clientPromise';
import PostList from '../components/postList';

const data = [
  {"_id":{"$oid":"62f1958e5d5130d465a98dd8"},"title":"The Watcher","body":"(This entry was written many years ago.)\n\nSometimes I feel like I am composed of several different energies.\n\nOne is the primal spirit. The nothing that encompasses everything. The inter-connectedness.\nTwo is the animal rage. It burns within like a fire. It likes to crackle and pop out from under the control.\nThree is the construct. The summation of 26 years of experience and attachments. The Ego.\n\nThe watcher observes this pool of energies as certain parts spew out into the external world on various occasions.\nThe watcher feels far and somewhat disconnected from the energies that bubble up so vividly. Unaffected by them. \nThe watcher provides helpful suggestions sporadically. Like a faint whisper that vibrates the strings of your dimension.","status":true,"createdAt":"8/8/2022, 7:00:30 PM","__v":{"$numberInt":"0"}},
  {"_id":{"$oid":"6300125771fb147208a122e7"},"title":"Are you EXCITED?","body":"The question I keep hearing.\n\nI try to be excited but it's more like a nervous feeling. :x\nI know I shouldn't be, I should be so relaxed and so grateful. I am partially.\nBut there are so many things that can go wrong. My job, getting sick, ... I guess that's kinda it.\nNow that I wrote this out, I actually feel way more calm. \n\nWorst case scenario: I get incredibly sick. High fever, shits, pain in stomach and head. For 2 weeks.\nThen I should be immune to whatever the fuck? Probably.\n\nBest case scenario: I see all the things I want to see while chilling and not feeling stressed out by anything. Meet cool people, find new foods that I like, and explore totally new places. Learning a lot as I go. Obtaining wisdom that I wasn't exposed to in the comfortable western world.","status":true,"createdAt":"8/19/2022, 6:44:39 PM","__v":{"$numberInt":"0"}},
  {"_id":{"$oid":"6318fb38aee4ba47ec90dd41"},"title":"Perfectionist's Mask","body":"Lately I have experienced many moments of happiness. Resulting from nothing more than simply being present in the moment and feeling grateful for all that I have, my health mostly.\n\nThese moments are often followed by me looking for something wrong with my life so that I can fix it. Then I fixate my awareness on what is wrong with a particular thing and find myself unhappy. \n\nThe past year, that particular thing is usually relationships. Everything else in my life seems to be under my control. But the way other people respond or act towards me seems to be the one thing beyond my control. I know it has little to do with me and more to do with them. I just want more out of them. I want to optimize my relationships, sometimes even optimize other peoples lives. \n\nI know if they are happy, they will act better towards themselves and therefore others. At least that has been my own experience with myself. When I am angry at myself or life, my perception of others is tinted in that same negative light. \n\nSo I fixate on how a person is not acting in a wholesome manner towards me or someone close to me. My awareness becomes full of this idea. This dream. I have to pull myself out of it by reminding myself it is just a dream. The thought is not real. I created it in my mind and I can end it, just as easily. And so it usually dies but not after a few hours of lingering in my mind, draining my emotional energy.\n\nAre we not Gods of our own realities? \nWe create our own suffering.\nOnly we can put an end to it.\n\nSome of us think we deserve to suffer.\nI do not, but here I am itching to make it all perfect.\nNice and neat. And for that I pay the price, each and every time.\n\nA reminder that imperfection is perfection.\nIt's unpredictable, it's untamed, it's unknown.","status":true,"createdAt":"9/7/2022, 4:12:39 PM","__v":{"$numberInt":"0"}}
]




const HomePage = (props) => {

  return (
    <>
      <Head>
        <title>Namblo</title>
        <meta 
          name="description"
          content="Thoughts alots"
        />
      </Head>
      <PostList posts={data} />
      {/* Login Register Buttons */}
    </>
  )
}

export default HomePage;