/* Sidebar Menu */
.hamburger {
  position: fixed;
  top: 1rem;
  right: 1rem;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;
}

.sidebar {
  position: fixed;
  top: 0;
  right: -250px;
  width: 220px;
  height: 100%;
  background: #014F86;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: 0.3s ease;
  z-index: 1000;
}

.sidebar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.sidebar.open {
  right: 0;
  }
