/**
 * @type {import('@types/aws-lambda').CreateAuthChallengeTriggerHandler}
 */
exports.handler = async (event) => {
  if (event.request.session.length === 0) {
      const challengeAnswer = process.env.CHALLENGEANSWER; // Set your challenge answer (e.g., a static code or OTP)
      
      // Send the challengeAnswer to the user (e.g., via email/SMS)
      
      event.response.publicChallengeParameters = { trigger: 'true' };
      event.response.privateChallengeParameters = { answer: challengeAnswer };
  }
  return event;
};

