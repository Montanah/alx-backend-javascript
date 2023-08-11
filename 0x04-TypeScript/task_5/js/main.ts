interface MajorCredits {
    credits: number;
    brand: "Major";
}

interface MinorCredits {
    credits: number;
    brand: "Minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      brand: 'Major',
      credits: subject1.credits + subject2.credits,
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      brand: 'Minor',
      credits: subject1.credits + subject2.credits,
    };
}

// Example usage
const subject1Major: MajorCredits = { brand: 'Major', credits: 4 };
const subject2Major: MajorCredits = { brand: 'Major', credits: 3 };

const subject1Minor: MinorCredits = { brand: 'Minor', credits: 2 };
const subject2Minor: MinorCredits = { brand: 'Minor', credits: 1 };

const totalMajorCredits = sumMajorCredits(subject1Major, subject2Major);
const totalMinorCredits = sumMinorCredits(subject1Minor, subject2Minor);

console.log('Total Major Credits:', totalMajorCredits);
console.log('Total Minor Credits:', totalMinorCredits);