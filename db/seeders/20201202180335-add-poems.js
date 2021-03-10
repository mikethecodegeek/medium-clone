'use strict';
const faker = require('faker')

const poems = [];

const gen_paragraph = () => {
  let str = ''
  for (let a=0; a<3; a++) {
    str += faker.lorem.paragraph(5);
    str += '\n\n'

  }
  return str
}

for (let a=0; a<25;a++) {
  const poem = {
    body: gen_paragraph(),
    title: faker.lorem.sentence(1),
    userId:1,
    imgLink: 'dummy',
    createdAt: faker.date.between('1-1-2020','3-1-2021'),
    updatedAt: new Date(),
  }
  poems.push(poem)
}

for (let a=0; a<15;a++) {
  for (let b=9; b<18;b++) {

    const poem = {
      body: gen_paragraph(),
      title: faker.lorem.sentence(1),
      userId:b,
      imgLink: 'dummy',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    poems.push(poem)
  }
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Articles',
            [  
                {
                    body: `
                    A dark unfathomed tide
                    Of interminable pride -
                    A mystery, and a dream,
                    Should my early life seem;
                    I say that dream was fraught
                    With a wild and waking thought
                    Of beings that have been,
                    Which my spirit hath not seen,
                    Had I let them pass me by,
                    With a dreaming eye!
                    Let none of earth inherit
                    That vision of my spirit;
                    Those thoughts I would control,
                    As a spell upon his soul:
                    For that bright hope at last
                    And that light time have past,
                    And my worldly rest hath gone
                    With a sigh as it passed on:
                    I care not though it perish
                    With a thought I then did cherish.`,
                    title: 'Imitation',
                    userId: 2,
                    imgLink: 'dummy',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    body: `
                    "You cannot swim for new horizons until you have courage 
                    to lose sight of the shore."

                    ----------------

                    the crow Bijou ceased to beseech,
                    a timorous speech, seeking the half-truths
                    beneath a black mass of kraken-ish teeth,
                    seized Icarus, a tragedy past-due. 

                    a shattering splash crashed brackish and blue,
                    and there breached, thrashing, a dragon-ish beast,
                    fastened to feet and beak seemingly glued,
                    the crow Bijou ceased to beseech. 

                    unseen from under the shadowy deeps,
                    a flutter, a crunch, then suddenly food.
                    the wail of boatswain pales then peaks,
                    a timorous speech, seeking the half-truths 

                    frantically grabbing at vanishing shoes,
                    mannequins lacking their muscle and meat,
                    of battling past a panicking crew,
                    beneath a black mass of kraken-ish teeth, 

                    then quietly breathe. leviathan squeeze
                    hope, flickering scene to collapse to.
                    choking on mast-wood, and splintering beams
                    seized Icarus, a tragedy past-due. 

                    a wave's brine lines this lagan-ish tomb,
                    where graves lie rotten but peaceful at sea,
                    softened and mauled, flotsam up through the gloom,
                    sodden and trawled as a cautioned debris,
                    a ghoulish cue that we never lose view
                    of the trees that grew like beacons on beach...

                    the crow Bijou ceased to beseech.
                   `,
                    title: 'Alone',
                    userId: 2,
                    imgLink: 'dummy',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    body: 
                    `
                Science! true daughter of Old Time thou art!
                  Who alterest all things with thy peering eyes.
                Why preyest thou thus upon the poet's heart,
                  Vulture, whose wings are dull realities?
                How should he love thee? or how deem thee wise,
                  Who wouldst not leave him in his wandering
                To seek for treasure in the jewelled skies,
                  Albeit he soared with an undaunted wing?
                Hast thou not dragged Diana from her car?
                  And driven the Hamadryad from the wood
                To seek a shelter in some happier star?
                  Hast thou not torn the Naiad from her flood,
                The Elfin from the green grass, and from me
                The summer dream beneath the tamarind tree?`,
                    title: 'Sonnet -- To Science',
                    userId: 2,
                    imgLink: 'dummy',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    body: `
                    Gaily bedight,
                    A gallant knight,
                    In sunshine and in shadow,
                    Had journeyed long,
                    Singing a song,
                    In search of Eldorado.

                    But he grew old-
                    This knight so bold-
                    And o'er his heart a shadow
                    Fell as he found
                    No spot of ground
                    That looked like Eldorado.

                    And, as his strength
                    Failed him at length,
                    He met a pilgrim shadow-
                    "Shadow," said he,
                    "Where can it be-
                    This land of Eldorado?"

                    "Over the Mountains
                    Of the Moon,
                    Down the Valley of the Shadow,
                    Ride, boldly ride,"
                    The shade replied-
                    "If you seek for Eldorado!"`,
                    title: 'Eldorado',
                    userId: 3,
                    imgLink: 'dummy',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    body: `
                In spring of youth it was my lot
                To haunt of the wide world a spot
                The which I could not love the less-
                So lovely was the loneliness
                Of a wild lake, with black rock bound,
                And the tall pines that towered around.
         
                But when the Night had thrown her pall
                Upon that spot, as upon all,
                And the mystic wind went by
                Murmuring in melody-
                Then- ah then I would awake
                To the terror of the lone lake.
         
                Yet that terror was not fright,
                But a tremulous delight-
                A feeling not the jewelled mine
                Could teach or bribe me to define-
                Nor Love- although the Love were thine.
         
                Death was in that poisonous wave,
                And in its gulf a fitting grave
                For him who thence could solace bring
                To his lone imagining-
                Whose solitary soul could make
                An Eden of that dim lake.`,
                    title: 'The Lake',
                    userId: 4,
                    imgLink: 'dummy',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    body: `
              Dim vales- and shadowy floods-
              And cloudy-looking woods,
              Whose forms we can't discover
              For the tears that drip all over!
              Huge moons there wax and wane-
              Again- again- again-
              Every moment of the night-
              Forever changing places-
              And they put out the star-light
              With the breath from their pale faces.
              About twelve by the moon-dial,
              One more filmy than the rest
              (A kind which, upon trial,
              They have found to be the best)
              Comes down- still down- and down,
              With its centre on the crown
              Of a mountain's eminence,
              While its wide circumference
              In easy drapery falls
              Over hamlets, over halls,
              Wherever they may be-
              O'er the strange woods- o'er the sea-
              Over spirits on the wing-
              Over every drowsy thing-
              And buries them up quite
              In a labyrinth of light-
              And then, how deep!- O, deep!
              Is the passion of their sleep.
              In the morning they arise,
              And their moony covering
              Is soaring in the skies,
              With the tempests as they toss,
              Like- almost anything-
              Or a yellow Albatross.
              They use that moon no more
              For the same end as before-
              Videlicet, a tent-
              Which I think extravagant:
              Its atomies, however,
              Into a shower dissever,
              Of which those butterflies
              Of Earth, who seek the skies,
              And so come down again,
              (Never-contented things!)
              Have brought a specimen
              Upon their quivering wings.`,
                    title: 'Fairy-Land',
                    userId: 5,
                    imgLink: 'dummy',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    body: `
              Once upon a midnight dreary, while I pondered, weak and weary,
            Over many a quaint and curious volume of forgotten lore,
              While I nodded, nearly napping, suddenly there came a tapping,
             As of some one gently rapping, rapping at my chamber door.
            "'Tis some visitor," I muttered, "tapping at my chamber door-
                          Only this, and nothing more."
          
              Ah, distinctly I remember it was in the bleak December,
            And each separate dying ember wrought its ghost upon the floor.
              Eagerly I wished the morrow;- vainly I had sought to borrow
              From my books surcease of sorrow- sorrow for the lost Lenore-
            For the rare and radiant maiden whom the angels name Lenore-
                          Nameless here for evermore.
          
              And the silken sad uncertain rustling of each purple curtain
            Thrilled me- filled me with fantastic terrors never felt before;
              So that now, to still the beating of my heart, I stood repeating,
              "'Tis some visitor entreating entrance at my chamber door-
            Some late visitor entreating entrance at my chamber door;-
                          This it is, and nothing more."
          
              Presently my soul grew stronger; hesitating then no longer,
            "Sir," said I, "or Madam, truly your forgiveness I implore;
              But the fact is I was napping, and so gently you came rapping,
              And so faintly you came tapping, tapping at my chamber door,
            That I scarce was sure I heard you"- here I opened wide the door;-
                          Darkness there, and nothing more.
          
            Deep into that darkness peering, long I stood there wondering, fearing,
            Doubting, dreaming dreams no mortals ever dared to dream before;
              But the silence was unbroken, and the stillness gave no token,
              And the only word there spoken was the whispered word, "Lenore!"
            This I whispered, and an echo murmured back the word, "Lenore!"-
                          Merely this, and nothing more.
          
            Back into the chamber turning, all my soul within me burning,
             Soon again I heard a tapping somewhat louder than before.
              "Surely," said I, "surely that is something at my window lattice:
              Let me see, then, what thereat is, and this mystery explore-
            Let my heart be still a moment and this mystery explore;-
                          'Tis the wind and nothing more."
          
            Open here I flung the shutter, when, with many a flirt and flutter,
              In there stepped a stately raven of the saintly days of yore;
            Not the least obeisance made he; not a minute stopped or stayed he;
              But, with mien of lord or lady, perched above my chamber door-
            Perched upon a bust of Pallas just above my chamber door-
                          Perched, and sat, and nothing more.
          
            Then this ebony bird beguiling my sad fancy into smiling,
              By the grave and stern decorum of the countenance it wore.
               "Though thy crest be shorn and shaven, thou," 
                          I said, "art sure no craven,
             Ghastly grim and ancient raven wandering from the Nightly shore-
            Tell me what thy lordly name is on the Night's Plutonian shore!"
                          Quoth the Raven, "Nevermore."
          
            Much I marvelled this ungainly fowl to hear discourse so plainly,
              Though its answer little meaning- little relevancy bore;
                For we cannot help agreeing that no living human being
              Ever yet was blest with seeing bird above his chamber door-
            Bird or beast upon the sculptured bust above his chamber door,
                          With such name as "Nevermore."
          
            But the raven, sitting lonely on the placid bust, spoke only
              That one word, as if his soul in that one word he did outpour.
                Nothing further then he uttered- not a feather then he fluttered-
              Till I scarcely more than muttered, "other friends have flown before-
            On the morrow he will leave me, as my hopes have flown before."
                          Then the bird said, "Nevermore."
          
               Startled at the stillness broken by reply so aptly spoken,
            "Doubtless," said I, "what it utters is its only stock and store,
               Caught from some unhappy master whom unmerciful Disaster
               Followed fast and followed faster till his songs one burden bore-
            Till the dirges of his Hope that melancholy burden bore
                           Of 'Never- nevermore'."
          
              But the Raven still beguiling all my fancy into smiling,
                Straight I wheeled a cushioned seat in front of bird, 
                            and bust and door;
              Then upon the velvet sinking, I betook myself to linking
              Fancy unto fancy, thinking what this ominous bird of yore-
            What this grim, ungainly, ghastly, gaunt and ominous bird of yore
                          Meant in croaking "Nevermore."
          
              This I sat engaged in guessing, but no syllable expressing
            To the fowl whose fiery eyes now burned into my bosom's core;
              This and more I sat divining, with my head at ease reclining
              On the cushion's velvet lining that the lamplight gloated o'er,
            But whose velvet violet lining with the lamplight gloating o'er,
                          She shall press, ah, nevermore!
          
              Then methought the air grew denser, perfumed from an unseen censer
            Swung by Seraphim whose footfalls tinkled on the tufted floor.
                "Wretch," I cried, "thy God hath lent thee- 
                       by these angels he  hath sent thee
              Respite- respite and nepenthe, from thy memories of Lenore!
            Quaff, oh quaff this kind nepenthe and forget this lost Lenore!"
                          Quoth the Raven, "Nevermore."
          
              "Prophet!" said I, "thing of evil!- prophet still, 
                          if bird or devil!-
            Whether Tempter sent, or whether tempest tossed thee here ashore,
              Desolate yet all undaunted, on this desert land enchanted-
              On this home by horror haunted- tell me truly, I implore-
            Is there- is there balm in Gilead?- tell me- tell me, I implore!"
                          Quoth the Raven, "Nevermore."
          
              "Prophet!" said I, "thing of evil- prophet still, 
                           if bird or devil!
            By that Heaven that bends above us- by that God we both adore-
              Tell this soul with sorrow laden if, within the distant Aidenn,
              It shall clasp a sainted maiden whom the angels name Lenore-
            Clasp a rare and radiant maiden whom the angels name Lenore."
                          Quoth the Raven, "Nevermore."
          
            "Be that word our sign in parting, bird or fiend," I shrieked,
                             upstarting-
            "Get thee back into the tempest and the Night's Plutonian shore!
              Leave no black plume as a token of that lie thy soul hath spoken!
              Leave my loneliness unbroken!- quit the bust above my door!
            Take thy beak from out my heart, and take thy form from off my door!"
                         Quoth the Raven, "Nevermore."
          
              And the Raven, never flitting, still is sitting, still is sitting
            On the pallid bust of Pallas just above my chamber door;
              And his eyes have all the seeming of a demon's that is dreaming,
            And the lamplight o'er him streaming throws his shadow on the floor;
            And my soul from out that shadow that lies floating on the floor
                          Shall be lifted- nevermore!`,
                    title: 'The Raven',
                    userId: 6,
                    imgLink: 'dummy',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                ...poems
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Articles', null, {});
    },
};
