<template>
  <div id="all-users">
    <div class="header-area spacer">
      <!-- <h5 class="w-100">All Admins</h5> -->
      <div class="w-100">
        <button class="primary-btn d-flex align-items-center" style="gap: 10px">
          <i-icon icon="memory:plus" width="20px" />
          <span>add admin</span>
        </button>
      </div>
      <div class="w-100">
        <div class="search-field w-100">
          <label class="mb-0" for="">Search</label>
          <div class="d-flex align-items-center" style="gap: 20px">
            <div class="search-area">
              <i-icon icon="carbon:search" class="search-icon" />
              <input type="search" name="" id="" placeholder="User Email" />
            </div>
            <button class="primary-btn">filter</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Table Content  -->
    <div class="">
      <div class="table-responsive">
        <table class="table table-centered table-nowrap mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                Full Name
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <th scope="col">
                User ID
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <th scope="col">
                User Email
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <th scope="col">
                Registration Date
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <th scope="col">
                User Category
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hello World</td>
              <td>Hello World</td>
              <td>Hello World</td>
              <td>Hello World</td>
              <td>Hello World</td>
              <td>Hello World</td>
              <td>
                <div class="d-flex align-items-center" style="gap: 25px">
                  <span class="edit" role="button">
                    <i-icon icon="uil:edit" />
                  </span>
                  <span class="delete" role="button">
                    <i-icon icon="fluent:delete-12-regular" />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
