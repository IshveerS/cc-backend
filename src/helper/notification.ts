const notificationCampaign = (campaignName: string) => {
  return {
    title: 'Campaign is Live',
    message: `🚀 Campaign Live! The ${campaignName} is now live!`,
  };
};

const notificationPitch = (campaignName: string, type: 'Admin' | 'Creator', creatorName?: string) => {
  if (type === 'Admin') {
    return {
      title: '📬 New Pitch Submitted!',
      message: `A new pitch for the ${campaignName} has been submitted by ${creatorName}.`,
    };
  }
  return {
    title: '📤 Pitch Sent Successfully!',
    message: `Your pitch for the ${campaignName} has been sent. We’ll review it and get back to you soon. Thanks for your submission!`,
  };
};

//  Feedback on Draft
const notificationDraftFeedback = (campaignName: string) => {
  return {
    title: '📝 Feedback on Draft',
    message: ` 📝 Draft Feedback Available! Feedback on your draft for ${campaignName} is ready.`,
  };
};

const notificationFinalDraft = (campaignName: string, type: 'Admin' | 'Creator', creatorName?: string) => {
  if (type === 'Admin') {
    return {
      title: '📬 Final Draft Received!',
      message: `📝 Final Draft Submitted! The final draft for ${campaignName} has been submitted by ${creatorName}.`,
    };
  }
  return {
    title: '📝 Draft Sent Successfully!',
    message: `Your draft for the ${campaignName} has been sent. We’ll review it and let you know if any changes are needed`,
  };
};


// const notificationDraft = (campaignName: string, type: 'Admin' | 'Creator', creatorName?: string,  draft?: string) => {
//   if (type === 'Admin') {
//     return {
//       title: `📬 New ${draft}  Received!`,
//       message: `A new ${draft} for the ${campaignName} has been submitted by ${creatorName}.`,
//     };
//   }
//   return {
//     title: '📝 Draft Sent Successfully!',
//     message: `Your draft for the ${campaignName} has been sent. We’ll review it and let you know if any changes are needed`,
//   };
// };


const notificationDraft = (campaignName: string, type: 'Admin' | 'Creator', creatorName?: string) => {
  if (type === 'Admin') {
    return {
      title: `📬 New Submission of Draft Received!`,
      message: `A new draft for the ${campaignName} has been submitted by ${creatorName}.`,
    };
  }
  return {
    title: '📝 Draft Sent Successfully!',
    message: `Your draft for the ${campaignName} has been sent. We’ll review it and let you know if any changes are needed`,
  };
};

const notificationSignature = (campaignName: string) => {
  return {
    title: ' Agreement Due for Signature and Upload',
    message: `📄 Agreement Pending. The agreement for ${campaignName} is ready for signature.`,
  };
};

//
const notificationPendingAgreement = (campaignName: string) => {
  return {
    title: 'Shortlisted Creators Pending Agreement Generation',
    message: `📝 Shortlisted Creators Pending! Shortlisted creators are pending agreement generation for ${campaignName}.`,
  };
};

const notificationAgreement = (campaignName: string, type: 'Admin' | 'Creator', creatorName?: string) => {
  if (type === 'Admin') {
    return {
      title: '📄 New Agreement Received!',
      message: `An agreement for the ${campaignName} has been submitted by ${creatorName}. `,
    };
  }
  return {
    title: '🤝 Agreement Sent! ',
    message: `Your agreement for the ${campaignName} has been sent.`,
  };
};

const notificationApproveAgreement = (campaignName: string) => {
  return {
    title: '✅ Agreement Approved!',
    message: `Your agreement for the ${campaignName} has been approved. You’re all set to move forward!`,
  };
};

const notificationApproveDraft = (campaignName: string, draft: string) => {
  return {
    title: `✅ Draft Approved!`,
    message: `Your ${draft} for ${campaignName} has been approved. Great work!`,
  };
};

const notificationRejectDraft = (campaignName: string, draft: string) => {
  return {
    title: `❌ ${draft} Rejected`,
    message: `Your ${draft} for the ${campaignName} has been rejected. Please review the feedback and revise your submission.`,
  };
};

const notificationPosting = (campaignName: string, type: 'Admin' | 'Creator', creatorName?: string) => {
  if (type === 'Admin') {
    return {
      title: '🎉 Post Submitted!',
      message: `${creatorName} has successfully posted for the ${campaignName}. `,
    };
  }
  return {
    title: '🎉 Post Submitted!',
    message: `Your post for the ${campaignName} has been successfully submitted. Thank you for your work!`,
  };
};

const notificationGroupChat = (campaignName: string, thread: string) => {
  return {
    title: `💬 New Message in ${thread} Chat!`,
    message: `You have a new message in your group chat for ${campaignName} `,
  };
};

const notificationCSMChat = (thread: string) => {
  return {
    title: `💬 New Private!`,
    message: `You have a new message in your CSM chat for ${thread}. `,
  };
};



const reminderDueDate = (
  campaignName: string,
  dueDate: string,
  type: 'Posting' | 'Draft' | 'Agreement',
  creatorName?: string,
) => {
  if (type === 'Posting') {
    return {
      message: `Your post for ${campaignName} is due on ${dueDate}. `,
      title: '⏳ Posting Due Soon!',
    };
  }

  if (type === 'Draft') {
    return {
      message: `Your draft for ${campaignName} is due on ${dueDate}. Please make sure to submit it on time.`,
      title: '⏳ Draft Due Soon!',
    };
  }

  if (type === 'Agreement') {
    return {
      message: `Just a reminder that the agreement for the ${campaignName} is due on ${dueDate}. Please review and submit it before the deadline.`,
      title: '⏳ Agreement Due Soon!',
    };
  }
};

export {
  notificationPitch,
  notificationDraft,
  notificationAgreement,
  notificationPendingAgreement,
  notificationSignature,
  notificationApproveAgreement,
  notificationApproveDraft,
  notificationRejectDraft,
  notificationPosting,
  notificationCSMChat,
  notificationGroupChat,
  reminderDueDate,
};
