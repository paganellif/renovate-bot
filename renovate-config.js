Object.assign(process.env, {
    GIT_AUTHOR_NAME: 'RenovateBot',
    GIT_AUTHOR_EMAIL: 'bot@renovate.com',
    GIT_COMMITTER_NAME: 'RenovateBot',
    GIT_COMMITTER_EMAIL: 'bot@renovate.com',
});

module.exports = {
    "username": "RenovateBot",
    "gitAuthor": "Renovate Bot <bot@renovate.com>",
    "assignees": ["RenovateBot"],
    "onboarding": false,
    "labels": ["renovate"],
    "requireConfig": "optional",
    "includeForks": true,
    "automerge": true,
    "automergeType": "pr",
    "rebaseWhen": "auto",
    "dependencyDashboard": false,
    "dependencyDashboardApproval": false,
    "dependencyDashboardAutoclose": false,
    "allowCustomCrateRegistries": true,
    "allowScripts": true,
    "exposeAllEnv": true,
    "updateLockFiles": true,
    "skipInstalls": true,
    "semanticCommits": "enabled",
    "semanticCommitsScope": "{{parentDir}}",
    "commitMessageExtra": "from v{{{currentVersion}}} to {{#if isMajor}}v{{{newMajor}}}{{else}}{{#if isSingleVersion}}v{{{newVersion}}}{{else}}{{{newValue}}}{{/if}}{{/if}}",
    "platform": "github",
    "repositories": [
        "paganellif/renovate-bot",
        "paganellif/angular-tracing",
        "paganellif/sodium",
        "paganellif/CV",
        "paganellif/tesi-paganelli"
    ],
    "packageRules": [
        {
            "description": "lockFileMaintenance",
            "matchUpdateTypes": ["pin", "digest", "patch", "minor", "major", "lockFileMaintenance"],
            "dependencyDashboardApproval": false,
            "stabilityDays": 0
        },
        {
            "matchPaths": ["**/Dockerfile*", "**/docker-compose*.yml"],
            "groupName": "container-image"
        },
        {"matchPackagePatterns": ["^typescript"], "groupName": "typescript"},
        {"matchPackagePatterns": ["^@angular"], "groupName": "angular"},
        {"matchPackagePatterns": ["^@nrwl"], "groupName": "nrwl"},
        {"matchPackagePatterns": ["^@ngrx"], "groupName": "ngrx"},
        {"matchPackagePatterns": ["^io.ktor"], "groupName": "ktor"}
    ]
};
