import * as core from '@actions/core'
import { deployPolar } from './deploy'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    // Log the current timestamp, wait, then log the new timestamp
    core.debug(new Date().toTimeString())
    await deployPolar()
    core.debug(new Date().toTimeString())
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
