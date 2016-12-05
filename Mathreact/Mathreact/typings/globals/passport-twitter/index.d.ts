// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/passport-twitter/passport-twitter.d.ts
declare module 'passport-twitter' {

    import passport = require('passport');
    import express = require('express');

    interface Profile extends passport.Profile {
        gender: string;
        username: string;

        _raw: string;
        _json: any;
        _accessLevel: string;
    }

    interface IStrategyOption {
        consumerKey: string;
        consumerSecret: string;
        callbackURL: string;

        reguestTokenURL?: string;
        accessTokenURL?: string;
        userAuthorizationURL?: string;
        sessionKey?: string;

        userProfileURL?: string;
        skipExtendedUserProfile?: boolean;
    }

    class Strategy implements passport.Strategy {
        constructor(options: IStrategyOption,
                    verify: (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => void);
        name: string;
        authenticate: (req: express.Request, options?: Object) => void;
    }
}
