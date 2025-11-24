export const saveEnquiry = (payload) => {
  // In real system this would persist to DB + trigger transactional email.
  console.log('New enquiry', payload);
  return { ...payload, id: `enq-${Date.now()}` };
};

export const sendAutoEmail = ({ email, name }) => {
  console.log(`Sending auto acknowledgement to ${email} for ${name}`);
  return true;
};

