import { createAction, props } from '@ngrx/store';
/**
 * The `signIn` action is dispatched when a user attempts to log in.
 * It expects an object with `email` and `password` properties.
 *
 * @example
 * dispatch(signIn({ email: 'test@example.com', password: 'password' }))
 */
export const signIn = createAction('[Auth] Sign In', props<{ email: string; password: string }>());

/**
 * The `loginSuccess` action is dispatched when a user successfully logs in.
 * It expects an object with a `user` property, which represents the logged-in user.
 *
 * @example
 * dispatch(signInSuccess({ user: signInUser }))
 */
export const signInSuccess = createAction('[Auth] Sign In Success', props<{ user: any }>());

/**
 * The `signInFailure` action is dispatched when a user fails to log in.
 * It expects an object with an `error` property, which represents the error that occurred during login.
 *
 * @example
 * dispatch(signInFailure({ error: signInError }))
 */
export const signInFailure = createAction('[Auth] Sign In Failure', props<{ error: any }>());

/**
 * The `signUp` action is dispatched when a user attempts to sign up.
 * It expects an object with `email` and `password` properties.
 *
 * @example
 * dispatch(signUp({ email: 'test@example.com', password: 'password' }))
 */
export const signUp = createAction('[Auth] Sign Up', props<{ email: string; password: string }>());

/**
 * The `signUpSuccess` action is dispatched when a user successfully signs up.
 * It expects an object with a `user` property, which represents the newly registered user.
 *
 * @example
 * dispatch(signUpSuccess({ user: newUser }))
 */
export const signUpSuccess = createAction('[Auth] Sign Up Success', props<{ user: any }>());

/**
 * The `signUpFailure` action is dispatched when a user fails to sign up.
 * It expects an object with an `error` property, which represents the error that occurred during sign up.
 *
 * @example
 * dispatch(signUpFailure({ error: signUpError }))
 */
export const signUpFailure = createAction('[Auth] Sign Up Failure', props<{ error: any }>());

/**
 * The `signOut` action is dispatched when a user attempts to log out.
 *
 * @example
 * dispatch(signOut())
 */
export const signOut = createAction('[Auth] Sign Out');

export const signOutSuccess = createAction('[Auth] Sign Out Success');

export const signOutFailure = createAction('[Auth] Sign Out Failure', props<{ error: any }>());

/**
 * The `forgotPassword` action is dispatched when a user attempts to reset their password.
 * It expects an object with an `email` property.
 *
 * @example
 * dispatch(forgotPassword({ email: 'test@example.com' }))
 */
export const forgotPassword = createAction('[Auth] Forgot Password', props<{ email: string }>());

/**
 * The `forgotPasswordSuccess` action is dispatched when a user successfully initiates a password reset.
 * It expects an object with a `message` property, which represents the success message from the server.
 *
 * @example
 * dispatch(forgotPasswordSuccess({ message: 'Password reset email sent.' }))
 */
export const forgotPasswordSuccess = createAction('[Auth] Forgot Password Success', props<{ message: string }>());

/**
 * The `forgotPasswordFailure` action is dispatched when a user fails to initiate a password reset.
 * It expects an object with an `error` property, which represents the error that occurred during the password reset initiation.
 *
 * @example
 * dispatch(forgotPasswordFailure({ error: forgotPasswordError }))
 */
export const forgotPasswordFailure = createAction('[Auth] Forgot Password Failure', props<{ error: any }>());

/**
 * The `newPassword` action is dispatched when a user attempts to set a new password.
 * It expects an object with `password` and `token` properties.
 * The `password` is the new password the user wants to set.
 * The `token` is the unique token received in the password reset email.
 *
 * @example
 * dispatch(newPassword({ password: 'newPassword', token: 'resetToken' }))
 */
export const resetPassword = createAction('[Auth] Reset Password', props<{ password: string }>());

/**
 * The `newPasswordSuccess` action is dispatched when a user successfully sets a new password.
 * It expects an object with a `message` property, which represents the success message from the server.
 *
 * @example
 * dispatch(resetPasswordSuccess({ message: 'Password has been reset.' }))
 */
export const resetPasswordSuccess = createAction('[Auth] Reset Password Success', props<{ message: string }>());

/**
 * The `newPasswordFailure` action is dispatched when a user fails to set a new password.
 * It expects an object with an `error` property, which represents the error that occurred during the password reset process.
 *
 * @example
 * dispatch(resetPasswordFailure({ error: newPasswordError }))
 */
export const resetPasswordFailure = createAction('[Auth] Reset Password Failure', props<{ error: any }>());
