PennController.ResetPrefix(null)

PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p> Hey everyone! </p>")
    ,
    newText("<p> Hey, everyone, we are going to play a really fun and nice game together with a wizard and baby dragon and some really cool shadows belonging to some animals.</p>")
    ,
    newText("<p>Please enter your ID and then click the button below to start the experiment.</p>")
    ,
    newTextInput("ID")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("ID") )
)
.log( "ID" , getVar("ID") )

   PennController("welcome" ,
    defaultText
        .print()
    ,
    newText ("<p> Once upon a time in a faraway land there lived a very gifted wizard Merlin who liked to play with shadows and make others guess what they are. </p>")
    ,
                  
     newImage ("wizardanddragon.png")
     ,
                     ,
    newKey(" ")
        .wait()
)
    PennController("continuation", defaultText
        .print()
                   ,newText("<p> Now Merlin is playing the shadow game with a really cute baby dragon, who has to guess whose animal the shadow belongs to. </p>")
     ,
     newText ("<p> Now  the baby dragon will see a shadow. </p>")
     ,
     newText ("<p> When he guesses the shadow correctly, you have to reward the baby dragon with a big apple, and when he guesses the shadow wrong, you'll just give him a tiny apple. </p>")
    ,
                  newImage ("bigapple.png")
                ,
                   newImage("smallapple.png")
                   ,
                   newKey(" ")
        .wait()
)
                  
