<template>
  <section class="page-content-container" v-if="!isLoading">
    <div
      class="user-page-layout-container max-width-container"
      v-if="loggedinUser"
    >
      <div class="user-page-left">
        <div class="seller-controller">
          <span @click="doLogout" class="signout-btn">Sign Out</span>
        </div>
        <div class="user-section">
          <div class="profile-pic">
            <img :src="loggedinUser.imgUrl" />
          </div>
          <div class="user-info">
            <p class="username">{{ loggedinUser.username }}</p>
            <p class="user-level">{{ capSentence }} Seller</p>
            <p class="total-profit">
              Total Profit: ${{ totalMoneyMade.toFixed(0) }}
            </p>
          </div>
        </div>

        <div class="demo-progress">
          <p>Order completion</p>
          <el-progress
            :text-inside="true"
            :stroke-width="15"
            :percentage="70"
            :color="color"
          />
          <p>User Reviews</p>
          <el-progress
            :text-inside="true"
            :stroke-width="15"
            :percentage="80"
            :color="color"
          />

          <p>Rating</p>
          <el-progress
            :text-inside="true"
            :stroke-width="15"
            :percentage="50"
            :color="color"
          />
          <p>Activity</p>
          <el-progress
            :text-inside="true"
            :stroke-width="15"
            :percentage="100"
            :color="color"
          />
        </div>

        <div class="preview-controller-btn">
          <p @click="this.$router.push('/seller')">Preview Seller Manager</p>
        </div>
      </div>

      <div class="user-page-right">
        <h1>My Orders Timeline</h1>
        <div class="user-page-orders-list">
          <ul class="table-header">
            <li>Gig</li>
            <li>Title</li>
            <li>Date</li>
            <li>Price</li>
            <li>Status</li>
          </ul>
          <ul
            class="table-row"
            v-for="order in ordersToShow"
            :key="order"
            @click="showTimeLine(order._id)"
          >
            <li><img :src="order.gig.productImgs[0]" /></li>
            <li>{{ order.gig.title }}</li>
            <li>
              {{ new Date(order.createdAt).toLocaleDateString("iw-IL") }}
            </li>
            <li>{{ "$" + order.gig.price }}</li>
            <li :style="{ color: order.status ? '' : '' }">
              {{ order.status.toUpperCase() }}
            </li>
            <div class="time-line-container">
              <timeLine
                v-if="isTimeLineShowen && currOrderId == order._id"
              ></timeLine>
            </div>
          </ul>
        </div>
        <!-- <chat :msgTo="msgTo"></chat> -->
      </div>
    </div>
    <div v-else>plase log in</div>
  </section>
</template>

<script>
import timeLine from "../components/time-line.vue";

export default {
  data() {
    return {
      color: "#67c23a",
      isTimeLineShowen: false,
      currOrderId: null,
      msgTo: {
        fullname: "guest",
        id: "623f4e421513c14a270f61a4",
        imgUrl:
          "data:image/png;base64,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",
      },
      pageSize: 4,
      pageIdx: 0,
      msgTo: {
        fullname: "guest",
        id: "623f4e421513c14a270f61a4",
        imgUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAA+Pj75+fnDw8Pl5eX09PRYWFjs7OySkpKenp7Z2dn8/PwkJCSAgIDHx8ddXV1RUVG2trY0NDRycnIODg7T09OqqqqLi4sYGBhmZmbg4OArKyseHh5ERETPz8+kpKRubm6WlpaxsbF7e3tLS0s5OTkxMTFadFEtAAAIiElEQVR4nO2d23biOgxACyGBhgQIFEqBYWCg9P//8JByKEiWE19jdy3t12mMnNiybta8vDAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMg0inp8lxVu37+2p2nJymaWiBXJJM17ueyG49TUKL5oI0r4jZ3anyX/4ts/mwYXo3hvMstJjGZOtl6/xqluvfOcfRWml6N9aj0OJqk7xqzK/m9ZdpnUGpOcFerxyEFlqDbKY9v5rZr9mOU6P51UxDi66G7g585jW08AokTQd8O1X0Cmekr2IgZeTnxvbDcoK93sc29CSaGDdJPpzk88FquxrM88mw6U2MQ09DTioVevOeFuBPi/R9I/3raK3xTCLwbC55YC47NyM9GLMLKe2k6YukE/KZS5xTJD/IpE01jsg5zjqRWJN/hKB7Fb243RNP/vMurzZ/CTEPis8eiGf/epTViExU/6W61h+LdsJHbFvxTRDxU8f+Sj6F59+8yWqE6E4cNUc4CiNE5WgUCyzeWXuMMx5iUbQ/1Bk5lm5jMIhg4+TO5TSmwLJVRsMIflc8HxH7vKWZk5dgjRqNP5zhsOjKcKAVGmcZy4mBd6H5/nE3klMSlHa5WIyFjPddHDENfBaartEavE7jOBOROWNnizgdzBEJeu12YZYtGi2GZXqCIulaa5gjHO7kREY7kONrGylDHzEGVxhKZKNIbyB16kBCS5D2e7ce8B0OaKOZ3YD8c3srBEXsDtYD2gIT9cMoR7QDbhsXtjK04+03tiUjaHW72DVwZy9DZ2rG7sVBLy10FgMapX0nY/bBmKFNU+jvuDmfoQ0R2oOCRTMTJ2PCOP/ayZiupHHzvuG6cPPWzIExQHuLpgZaNfpxSbccgTSyRKEeczCmrbNiC5yhG703jWqG0Cf38Q1Du/lQ0xycjAmN+dCaBp4WbvKaMNca+rSAmt2N3oP6OfSJD6M0blwd6D6FjtRAvbdwERpLYKoutF2KAkdOfAs4ZOgisAzmi1y8cLgsyuDZGZiAd6H4oHr+dDCiHfBAdOEgQvcw9HGIDRAHRXeo/M+NmWQDKri0P/NRbVXoIMYLjnkvrcdDCWUHEtqCrsbYalOUjQxts9WgsL6t7kPFUeGD+ldQRZtdyR0qAPxwJKMdqEDUrJbmDqqpCX9W1ODcu42pjNKtcSxSsZbJ3PzGGXO79eCOAZLLPLJyRCNFc50NVyaaBhVRcrS3cCqlDchyMzVEhPso4S22H7Bof0z8xNEfPIxzOc0RPmKpXzhZCLXeEX1C4q5FX9dxzfp4iBgKTR6IN54Wen5UKtRRx3b7SaiD7n3oqJuxeJkhdBRR4EsQUePQwMfElS+PsppB3czbqKnUEXVPL7I1WoMtG+XPSHzAiKyZZ6irXb19m6gD6l5XjBe7auhLoeVAfjYWkt4LJtc1uqCgr1j2lpMV5W4kq4mk98klnosWiEQ4te98bU7jZxsgG582hPa90Y+hMFhCQm6qO+XwvM7f8/V52Hhpfx/xBK8L1a6jQk0V7RK9UbS3TWpmGPkEX+waf0R01akJ8+Yt4dOhioxMN2MVupZUlcx0ob4Gz4Yqken0+ML8gr5mmXipW4+3uOeYiI6wPnnEJ/6cagCpzy6qENQTxipUJE6lSjqyxripxXVJ6u4D3qgiC2OQIQxM2a825/V5U/WVGoJFFchoOQJ3m3yOY4vjeb5pUUwx5PBvZE0r9PI2kK+3dPAmiQt8U0VyNqZSZ713ydM2Z6hIc/kkv6LYjPIebRPVqPeY7odVE0HBkFzH6OTgcS3Ag+D6RsirPaHu7DW5lIENnKYJqgvnZhQvtB2DapZJmzUUcKG2xytUUmTt/kiw2EZTp8s77ZEllYBAII1KtGgjaLuCITTAogjUvE1+0AOa0/GKXaOD5EuJTNN5K2bjr1NsyD1RE1xsie8aIBtF9Dq8WsojKjcj7X5MdlXuj0hL/tDh3L4htMy3DAWVm5G0IyUbnu6/vzjx/jrWNmJ5z8/BTC08skZKrIHqPXataAQYFCHZIMYMBw3/dp2ieLdnS03wcZ1SNCY6vWopHvXP1gvlDy8FD5jK/z77vKKl0+HBj/uX4coC0kqBrgbpTEALSKh86LC3mfCRcDl2awGJUmmK4DV2FtbA/biIi5XkDB5OAulMiAa2kG3t6qYePsWo9oakUX74/x+pvsHULhMaMnZU9y30RCY1AKlJbtuVKi0SNNE3wnvqpn8yPtMlu2NLBUXrv6VUbSlZf/hv995m9QTeYtIrh+R/BHEmnQn5f/mArcAuvGH8m/KAn1j2e4U65xsKinHJo5seP43grdHk4iqWnjQWmGAH2f+xj4T+0+ybHhUm2HwBJUMf3Xt3M3wWtsWa2l34tiAAth58n4nIrG7vptYWhmkP5CAfy7MBjq9eKewK8nj/4dA+AN75fq1TZG4paTZ84+4ZpZt8SCX7jRBXJj8mjxurnW7otXo13dDppHpxW5Z3Uc3dIAPQZ8oN7SnlevMtZaQulbUiMmQPJqIrgg5D9ZeZihZcqfE0fNLjkYiap+rcFc1wJHWhE8Y+wmf9RcCRytCyggt40f5TK3Jm88NaIF9Gr3CpeA6Sb/RCg6gpj79oBtxM2t0THvaQtl0CF0Cp+7gqaBvqF2bdQ0v6fQSQceprI6LdYHAsrU0XGdKmvjYiPA2NWlbUdrhROT7MVR5MhlAA5tPMus/lhndDoRfmK9fm5D0adrpwsH7aQYqm2/IB5EL5UTXjLn5EBnq9fpKJ8DV+dFtvnsAt4mcBQTet634AMPHqxwuGPkzXDYyhMvVzTxj+Rtf9jWCqzc/7PYLf6PoaHYzZ+WmfDHfCwctvyIEHoh8tELY1rI9mtxjowXRdEgnNfj89PzeX/oNd1+WC493Tr19ibUnAMAzDMAzDMAzDMAzDMAzDMAzDMAzDMFb8BysRV9rc2qKCAAAAAElFTkSuQmCC",
      },
    };
  },
  created() {},
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
    totalMoneyMade() {
      let sum = 0;
      this.ordersToShow
        .filter((order) => order.status === "approved" && order.gig.price)
        .forEach((order) => (sum += order.gig.price));

      return sum;
    },

    capSentence() {
      return this.loggedinUser.level
        .split(" ")
        .map((word) => word.split("")[0].toUpperCase() + word.substring(1))
        .join(" ");
    },
    orders() {
      return this.$store.getters.orders;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    startIdx() {
      return this.pageIdx * this.pageSize;
    },
    ordersToShow() {
      return this.orders.filter((order) => {
        return order.buyer._id == this.loggedinUser._id;
      });
    },
  },

  methods: {
    showTimeLine(orderId) {
      this.isTimeLineShowen = !this.isTimeLineShowen;
      this.currOrderId = orderId;
    },
    async doLogout() {
      await this.$store.dispatch({ type: "logout" });
      this.$router.push("/");
      document.location.reload(true);
    },
  },

  components: {
    timeLine,
  },
};
</script>

<style></style>
