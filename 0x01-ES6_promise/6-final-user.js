import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default handleProfileSignup(firstName, lastName, fileName) {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);
    return Promise.allSettled([userPromise, photoPromise])
        .then((results) => {
            const finalResult = [];
            for (const result of results) {
                if (result.status === 'fulfilled') {
                    finalResult.push({
                        status: result.status,
                        value: result.value,
                    });
                } else {
                    finalResult.push({
                        status: result.status,
                        value: `Error: ${result.reason.message}`,
                    });
                }
            }
            return finalResult;
        });
}