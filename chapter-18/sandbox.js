// Spread && Rest
// =========================================================
// rest para
    // const double = (...nums) => {
    //     // do something
    //     console.log(nums);
    //     return nums.map(num => num * 2 )
    // }


    // const result = double(1, 3, 5, 6, 9);

    // console.log(result);


    // // spread syntax (arrays)

    // const people = ['ld', 'giang', 'lieu'];
    // const member = ['mario', 'chunli', ...people ]

    // console.log(member);

    // // spread syntax (objêcts)

    // const person = { name: 'ld', age: 23, job: 'love giang' };

    // const personClone = {...person, action: 'love'};

    // console.log(personClone);

// =========================================================
// Sets
// like array and only unique values

    const namesArray = ['ld', 'giang', 'love', 'much'];

    console.log(namesArray);

// if we ever have an array of data and we want to eliminate any kinds
// of duplicate from that array data so we could pass in into a set
const namesSet = new Set(namesArray);
console.log(namesSet);

// convert to array
// const uniqueName = [...namesSet];

    const uniqueNames = [...new Set(namesArray)];

    console.log(uniqueNames);

    const ages = new Set();

    ages.add(20);
    ages.add(25).add(30).add(45);
    ages.add(20);
    ages.delete(25)
    ages.add(45)

    console.log(ages, ages.size);
    console.log(ages, ages.has(30), ages.has(25));

    ages.clear();
    console.log(ages);

    const ld = new Set([
        { name: 'ld', age: 22 },
        { name: 'giang', age: 22 }, 
        { name: 'ldk', age: 24 },
    ]);

    ld.forEach(g => console.log(g.name, g.age));

    const number = new Set([1, 3, 3, 2, 1]);
    console.log(number);

    const symbolOne = Symbol('ld_giang');
    const symbolTwo = Symbol('ld_giang');

    console.log(symbolOne, symbolTwo, typeof symbolOne);
    // type symbol primite type

    console.log(symbolOne===symbolTwo); // falsse

    const ldk = {};

    ldk.age = 22;

    ldk[symbolOne] = 'ldk';
    ldk[symbolTwo] = 'giang';
    // so even though both of the symbols have the same indentifier
    // that doesn't matter they're still unique
    console.log(ldk);
