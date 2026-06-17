import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { addNote,readNote,removeNote, updateNote } from './notes.js';

yargs(hideBin(process.argv))
  .command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
      title: {
        describe: 'Note Title',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: 'Note Body',
        demandOption: true,
        type: 'string'
      }
    },
    handler(argv) {
      addNote(argv.title, argv.body);
    }
  }).command({
    command:"remove",
    describe:"Remove a note",
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        removeNote(argv.title)
    }
  }).command({
    command:"read",
    describe:'Read a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type :'string'
        }
    },
    handler(argv){
        readNote(argv.title)
    }
  }).command({
    command:'update',
    describe:'update a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'updated Body',
            demandOption:true,
            type :'string'
        }
    },
    handler(argv){
        updateNote(argv.title,argv.body)
    }
  })
  .parse();