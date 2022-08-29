import  express  from "express";
import cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json());

const user = [];

let tweets = [
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	    tweet: "eu amo o hub"
	}
];

server.post('/sign-up', (req,res) => {
    const NewUser = req.body;

    user.push(NewUser);
    res.send('OK');

})

server.post('/tweets', (req,res) => {
    const newTweet = req.body;
    const UserT = user.find(user => user.username === newTweet.username);


    tweets.push({...newTweet, avatar: UserT.avatar})
    res.send('OK');

})

server.get('/tweets', (req,res) => {
    const lastTweets = tweets.slice(-10).reverse();
    res.send(lastTweets);

})

server.listen(5000, () => console.log('Ta rodando'));