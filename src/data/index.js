import {faker} from '@faker-js/faker'

export function generateRandomListItems(count = 10) {
  return Array.apply(null, {length: count}).map(() => faker.lorem.sentence())
}
