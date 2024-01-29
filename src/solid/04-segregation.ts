interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunnigBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
}

class Humminbird implements Bird, FlyingBird{
    public fly() {}
    public eat() {}
}

class Ostrich implements Bird{
    public eat() {}
    public run() {}
}

class Pinguin implements Bird, RunnigBird, SwimmerBird{
    public eat() {}
    public run() {}
    public swim() {}
}