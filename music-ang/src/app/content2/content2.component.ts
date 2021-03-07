import { Component, OnInit } from '@angular/core';
import Vex from 'vexflow';

import * as vexflow from 'vexflow';

@Component({
  selector: 'content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.less']
})
export class Content2Component implements OnInit {

  constructor() { }

  ngOnInit(){
   
const VF = Vex.Flow;
 
// Create an SVG renderer and attach it to the DIV element named "vf".
const div = document.getElementById("boo")
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
 
// Configure the rendering context.
renderer.resize(850, 1000);
const context = renderer.getContext();

//context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
 
// Create a stave of width 400 at position 10, 40 on the canvas.
const stave = new VF.Stave(10, 0, 5000);
stave.setEndBarType(Vex.Flow.Barline.type.END);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();


var notes = [

  new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "w" }),
  new Vex.Flow.BarNote(),

  new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "w" }),
  new Vex.Flow.BarNote(),

  new Vex.Flow.StaveNote({ keys: ["e/4"], duration: "w" }),
  new Vex.Flow.BarNote(),

  new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "w" }),
  new Vex.Flow.BarNote(),

  new Vex.Flow.StaveNote({ keys: ["g/4"], duration: "w" }),
  new Vex.Flow.BarNote(),

  new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "w" }),
  new Vex.Flow.BarNote(),

  new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "w" }),
  new Vex.Flow.BarNote(),

  new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "w" }),
 

  /*new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "q" }),
  new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),
  new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),
  new Vex.Flow.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),*/
  //stave.setEndBarType(Vex.Flow.Barline.type.REPEAT_END)
 

  ];

  stave.setEndBarType(Vex.Flow.Barline.type.END);
  stave.setContext(context).draw();
// Create a voice in 4/4 and add the notes from above
var voice = new VF.Voice({num_beats: 32,  beat_value: 4, resolution: Vex.Flow.RESOLUTION});
voice.addTickables(notes);

// Format and justify the notes to 400 pixels.
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 800);

voice.setStrict(false)
// Render voice
voice.draw(context, stave);




  }
 
}
 



