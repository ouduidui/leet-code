/**
 * 哈希表
 */
export class Twitter {
  users = new Map<number, TwitterUser>()

  postTweet(userId: number, tweetId: number): void {
    this.getUser(userId).postTweet(tweetId)
  }

  getNewsFeed(userId: number): number[] {
    if (!this.users.has(userId)) return []

    const limit = 10
    const user = this.users.get(userId)!
    const tweets = user.getTweets(limit)
    const follows = user.follows
    if (follows.size > 0) {
      for (const follow of follows) {
        if (!this.users.has(follow)) continue
        tweets.push(...this.users.get(follow)!.getTweets(limit))
      }
    }

    return tweets.sort((a, b) => b.createAt - a.createAt)
      .filter((_, i) => i < limit)
      .map(i => i.id)
  }

  follow(followerId: number, followeeId: number): void {
    this.getUser(followerId).follow(followeeId)
  }

  unfollow(followerId: number, followeeId: number): void {
    this.getUser(followerId).unfollow(followeeId)
  }

  private getUser(userId: number): TwitterUser {
    if (!this.users.has(userId))
      this.users.set(userId, new TwitterUser(userId))
    return this.users.get(userId)!
  }
}

interface Tweet {
  id: number
  createAt: number
}

class TwitterUser {
  private tweets: Tweet[] = []
  public follows = new Set<number>()
  static CREATE_AT_TIME_STAMP = 0

  constructor(
    public userId: number,
  ) {}

  postTweet(tweetId: number): void {
    this.tweets.push({
      id: tweetId,
      createAt: this.nextStamp(),
    })
  }

  follow(followeeId: number): void {
    if (followeeId === this.userId) return
    this.follows.add(followeeId)
  }

  unfollow(followeeId: number): void {
    this.follows.delete(followeeId)
  }

  getTweets(limit = 10): Tweet[] {
    const end = this.tweets.length
    const start = end - limit < 0 ? 0 : end - limit
    return this.tweets.slice(start, end)
  }

  private nextStamp() {
    return TwitterUser.CREATE_AT_TIME_STAMP++
  }
}
