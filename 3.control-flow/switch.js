// SWITCH STATEMENTS


// SCIENCE SUBJECTS - Physics, Chemistry, Biology, Technical Drawing
// SOCIAL SCIENCES SUBJECTS - Accounting, Commerce, Marketing, Geography
// ARTS SUBJECTS - Government, Economics, Literature, History 

let studentGroup = 'SOCIAL SCIENCES';

let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';

// ASS 1: Rewrite this using if..else conditional statement


switch (studentGroup) {
    case 'SCIENCE': // (studentGroup === 'SCIENCE')
        console.log(generalSubjects + ' ' + scienceSubjects)  ;      
        break;

    case 'SOCIAL SCIENCES': // (studentGroup === 'SOCIAL SCIENCES')
        console.log('English, Mathematics, Accounting, Commerce, Marketing, Geography')        
        break;
        
    case 'ARTS': // (studentGroup === 'ARTS')
        console.log('English, Mathematics, Government, Economics, Literature, History')        
        break;

    default:
        console.log('English, Mathematics');
        break;
}

