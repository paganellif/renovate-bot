Object.assign(process.env, {
    GIT_AUTHOR_NAME: 'RenovateBot',
    GIT_AUTHOR_EMAIL: 'bot@renovate.com',
    GIT_COMMITTER_NAME: 'RenovateBot',
    GIT_COMMITTER_EMAIL: 'bot@renovate.com',
});

module.exports = {
    username: 'RenovateBot',
    gitAuthor: 'Renovate Bot <bot@renovate.com>',
    assignees: ["RenovateBot"],
    onboarding: false,
    labels: ["renovate"],
    requireConfig: false,
    automerge: true,
    automergeType: 'pr',
    rebaseWhen: 'auto',
    dependencyDashboard: false,
    dependencyDashboardApproval: false,
    dependencyDashboardAutoclose: false,
    trustLevel: 'high',
    updateLockFiles: true,
    skipInstalls: true,
    semanticCommits: 'enabled',
    semanticCommitsScope: '{{parentDir}}',
    commitMessageExtra: "from v{{{fromVersion}}} to {{#if isMajor}}v{{{newMajor}}}{{else}}{{#if isSingleVersion}}v{{{toVersion}}}{{else}}{{{newValue}}}{{/if}}{{/if}}",
    platform: 'github',
    repositories: [
        'paganellif/renovate-bot',
        'paganellif/sodium',
        'paganellif/pps-project-paganelli-2122',
        'paganellif/CV'
    ],
    packageRules: [
        {
            description: 'lockFileMaintenance',
            matchUpdateTypes: [
                'pin',
                'digest',
                'patch',
                'minor',
                'major',
                'lockFileMaintenance',
            ],
            dependencyDashboardApproval: false,
            stabilityDays: 0,
        },
    ],
};
