(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    interface movie {
        title: string, 
        description: string, 
        rating: number, 
        cast: string[]
    }

    // Crear una película
    function createMovie( { title, description, rating, cast } : movie ) {
        console.log({ title, description, rating, cast });
    }

    interface actor {
        fullName: string, 
        birthdate: Date 
    }
    // Crea un nuevo actor
    function createNewActor( { fullName, birthdate } : actor ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();