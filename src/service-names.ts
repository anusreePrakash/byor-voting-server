export enum ServiceNames {
    alive,
    version,
    getTechnologies,
    loadTechnologies,
    deleteTechnologies,
    getTechnology,
    addTechnology,
    updateTechnology,
    cancelTechnology,
    undoCancelVotingEvent,
    restoreTechnology,
    deleteTechnology,
    getVotes,
    loadVotes,
    deleteVotes,
    noservice,
    hasAlreadyVoted,
    saveVotes,
    aggregateVotes,
    getVotesCommentsForTech,
    getVotesWithCommentsForTechAndEvent,
    addReplyToVoteComment,
    createVotingEvent,
    addUsersForVotingEvent,
    loadUsersForVotingEvent,
    getVotingEvents,
    getVotingEvent,
    getVotingEventWithNumberOfCommentsAndVotes,
    openVotingEvent,
    closeVotingEvent,
    cancelVotingEvent,
    calculateWinner,
    getVoters,
    setTechologiesForEvent,
    addNewTechnologyToEvent,
    addCommentToTech,
    addReplyToTechComment,
    calculateBlips,
    calculateBlipsFromAllEvents,
    openForRevote,
    closeForRevote,
    moveToNexFlowStep,
    setRecommendationAuthor,
    setRecommendation,
    resetRecommendation,
    getConfiguration,
    authenticate,
    authenticateForVotingEvent,
    deleteUsers,
    saveLogInfo,
    getBlipHistoryForTech,
    createInitiative,
    getInitiatives,
    cancelInitiative,
    undoCancelInitiative,
    loadAdministratorsForInitiative,
    authenticateOrSetPwdIfFirstTime,
}
