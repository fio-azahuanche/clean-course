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
    
    interface Movie {
        title: string, 
        description: string, 
        rating: number, 
        cast: string[]
    }

    function createMovie( { title, description, rating, cast } : Movie ) {
        console.log({ title, description, rating, cast });
    }

    interface Actor {
        fullName: string, 
        birthdate: Date 
    }
  
    function createNewActor( { fullName, birthdate } : Actor ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();