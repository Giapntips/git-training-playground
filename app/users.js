// app/users.js

// Mảng dữ liệu người dùng giả lập (in-memory)
const users = [
  { id: 1, name: "Alice Nguyen", email: "alice@example.com" },
  { id: 2, name: "Bao Tran", email: "bao.tran@example.com" },
];

// Lấy toàn bộ danh sách user
export function getUsers() {
  return users;
}

// Tìm user theo email
export function findUserByEmail(email) {
  if (!email) return null;
  return users.find((u) => u.email === email) || null;
}

// Thêm user mới
export function addUser(name, email) {
  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  const exists = users.some((u) => u.email === email);
  if (exists) {
    throw new Error("Email already exists");
  }

  const id = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  const user = { id, name, email };
  users.push(user);
  return user;
}

// Cập nhật email user theo id
export function updateUserEmail(id, newEmail) {
  const user = users.find((u) => u.id === id);
  if (!user) {
    return null;
  }

  user.email = newEmail;
  return user;
}

// Xóa user theo id
export function deleteUser(id) {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) {
    return false;
  }

  users.splice(index, 1);
  return true;
}

// Đoạn demo nhỏ để chạy nhanh bằng node
if (require.main === module) {
  console.log("Initial users:", getUsers());
  const newUser = addUser("Cuong Le", "cuong.le@example.com");
  console.log("After add:", getUsers());
  updateUserEmail(newUser.id, "cuong.le.updated@example.com");
  console.log("After update:", getUsers());
  deleteUser(1)
  console.log("After delete:", getUsers());
}

export function giap() {
  return "Giapnt test";
}