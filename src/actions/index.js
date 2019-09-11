//action creator 
export const signIn = () => {
    return {
        type: 'SIGN_IN'
    };
};

//action creator - flips boolean flag of sign inout
export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};