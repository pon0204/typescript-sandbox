/** オーバーライド */
class User {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
  formatText(): string {
    return `name: ${this.name}`
  }
}

class AdminUser extends User {
  protected roles: number = 0
  constructor(name: string, roles: number) {
    super(name) // 親のコンストラクタを呼ぶ
    this.roles = roles
  }
  formatText(): string {
    const superText = super.formatText()
    return `${superText}, roles:${this.roles}`
  }
  hasRoles(): boolean {
    return this.roles > 0 ? true : false
  }
}

const admin = new AdminUser('Admin', 1)
console.log(admin.formatText()) // name: Admin, roles:1
console.log(admin.hasRoles()) // true

/** 親クラスを呼び出すことが出来る */
// class User {
//   protected name: string
//   constructor(name: string) {
//     this.name = name
//   }

//   formatText(): string {
//     return `name: ${this.name}`
//   }
// }

// class AdminUser extends User {
//   protected roles: number = 0
//   hasRoles(): boolean {
//     if (this.roles > 0) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

// const admin = new AdminUser('Admin')
// console.log(admin.formatText()) // name: Admin
// console.log(admin.hasRoles()) // false

export {}
