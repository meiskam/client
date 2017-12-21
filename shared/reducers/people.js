// @flow
import * as Types from '../constants/types/people'
import * as Constants from '../constants/people'
import * as PeopleGen from '../actions/people-gen'

const initialState: Types.State = Constants.makeState()

export default function(state: Types.State = initialState, action: PeopleGen.Actions) {
  switch (action.type) {
    case PeopleGen.resetStore:
      return initialState
    case PeopleGen.getPeopleData:
      return state
    default:
      // eslint-disable-next-line no-unused-expressions
      (action: empty) // if you get a flow error here it means there's an action you claim to handle but didn't
      return state
  }
}