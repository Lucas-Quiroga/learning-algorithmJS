vdescribe("twoFer()", () => {
    test("no name given", () => {
        expect(twoFer()).toEqual("One for you, one for me.");
    });

    xtest("a name given", () => {
        expect(twoFer("Alice")).toEqual("One for Alice, one for me.");
    });

    xtest("another name given", () => {
        expect(twoFer("Bob")).toEqual("One for Bob, one for me.");
    });
});

export const twoFer = (name) => {
    return name
        ? `One for ${name}, one for me.`
        : 'One for you, one for me.'
};

// another people solution

// const twoFer = (who = 'you') => `One for ${who}, one for me.`;

// const twoFer = name => `One for ${name || 'you'}, one for me.`;

// export var twoFer = (name) => `One for ${name || 'you'}, one for me.`;