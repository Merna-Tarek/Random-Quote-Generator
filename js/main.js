var quotes=[
    {'author': '--Oscar Wilde', 
    'quote': `"Be yourself; everyone else is already taken."`
    },
    {'author': '--Albert Einstein', 
    'quote': `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`
    },
    {'author': '--Frank Zappa', 
    'quote': `"So many books, so little time."`
    },
    {'author': '--Marcus Tullius Cicero', 
    'quote': `"A room without books is like a body without a soul."`
    },
    {'author': '--Mahatma Gandhi', 
    'quote': `"Be the change that you wish to see in the world."`
    },
    {'author': '--Elbert Hubbard', 
    'quote': `"If you tell the truth, you don't have to remember anything."`
    },
    {'author': '--Ralph Waldo Emerson', 
    'quote': `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`
    },
];
function generateQute(){
    var random = Number.parseInt(Math.random()*quotes.length + 1);
    document.getElementById("quoteGenerate").innerHTML=quotes[random].quote;
    document.getElementById("authorGenerate").innerHTML=quotes[random].author;
}