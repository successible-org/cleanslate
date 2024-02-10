/* eslint-disable sort/object-properties */

import {
  OtherActivity,
  SwimmingActivity,
} from '../components/forms/ExerciseForm/constants'
import { ExerciseGroup } from '../components/forms/ExerciseForm/ExerciseForm'
import { uuid } from '../helpers/uuid'
import { Profile } from './profile'

export class ExerciseLog {
  amount: number
  category: (OtherActivity | SwimmingActivity) | null
  duration: number | null
  groupName: ExerciseGroup
  incline: number | null
  name: string
  pace: number | null
  power: number | null
  weight: number | null

  // Foreign keys
  profile: string

  // Relationships
  exerciseLogToProfile: Profile | null

  // Metadata
  id = uuid()
  updatedAt = new Date()
  createdAt = new Date()
  type: 'exercise-log'

  constructor() {
    this.exerciseLogToProfile = null
    this.type = 'exercise-log'
  }
}
