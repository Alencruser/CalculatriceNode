	var x=Number(process.argv[2]);
	var y=Number(process.argv[3]);
	console.log(x+y);

/*
  require('yargs')
    .usage('$0 <cmd> [args]')
    .command('hello [name]', 'welcome ter yargs!', (yargs) => {
      yargs.positional('name', {
        type: 'string',
        default: 'Cambi',
        describe: 'the name to say hello to'
      })
    }, function (argv) {
      console.log('hello', argv.name, 'welcome to yargs!')
    })
    .help()
    .argv*/
    /* Faire une commande pour chaque operation differente ou yargs ira chercher la source.
    	Yargs ne demandera que un nom telle qu'une remote pour git et acceptera les deux paramètres.
    	*/